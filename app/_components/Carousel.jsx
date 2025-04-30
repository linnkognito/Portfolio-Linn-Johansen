'use client';

import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselImage from './CarouselImage';

const TWEEN_FACTOR_BASE = 0.2;

function Carousel({ slides = [] }) {
  if (!slides.length) return null;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenNodes = useRef([]);
  const tweenFactor = useRef(TWEEN_FACTOR_BASE * slides.length);

  const setTweenNodes = useCallback((emblaApi) => {
    const allSlides = emblaApi.slideNodes();
    tweenNodes.current = allSlides.map((slideNode) =>
      slideNode.querySelector('.parallax-layer')
    );
  }, []);

  const tweenParallax = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    emblaApi.scrollSnapList().forEach((snap, snapIndex) => {
      let diffToTarget = snap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (!emblaApi.slidesInView().includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (loopItem.index !== slideIndex || target === 0) return;

            const sign = Math.sign(target);
            diffToTarget =
              snap - scrollProgress + sign * (1 - Math.abs(scrollProgress));
          });
        }

        const translate = diffToTarget * -tweenFactor.current * 100;
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) {
          tweenNode.style.transform = `translateX(${translate}%)`;
        }
      });
    });
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenParallax();

    emblaApi.on('scroll', tweenParallax);
    emblaApi.on('reInit', () => {
      setTweenNodes(emblaApi);
      tweenParallax();
    });
  }, [emblaApi, tweenParallax, setTweenNodes]);

  return (
    <div
      className='flex-center flex-col gap-8 w-full max-w-5/6 mx-auto h-fit overflow-hidden'
      ref={emblaRef}
    >
      <div className='flex-center gap-4 w-full'>
        {slides.map((slide) => (
          <CarouselImage key={slide.src} image={slide} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
