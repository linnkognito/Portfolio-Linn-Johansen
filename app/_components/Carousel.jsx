'use client';

import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.2;

function Carousel({ slides = [] }) {
  if (!slides.length) return null;

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  // const setTweenNodes = useCallback((emblaApi) => {
  //   tweenNodes.current = emblaApi
  //     .slideNodes()
  //     .map((slideNode) => slideNode.querySelector('.parallax-layer'));
  // }, []);
  const setTweenNodes = useCallback((emblaApi) => {
    requestAnimationFrame(() => {
      tweenNodes.current = emblaApi
        .slideNodes()
        .map((slideNode) => slideNode.querySelector('.parallax-layer'));
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);
  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap - (1 - scrollProgress);
            }
          });
        }

        // const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
        // const tweenNode =
        //   tweenNodes.current[slideIndex % tweenNodes.current.length];
        // // const tweenNode = tweenNodes.current[slideIndex];
        // if (tweenNode) tweenNode.style.transform = `translateX(${translate}%)`;

        const rawTranslate = diffToTarget * (-1 * tweenFactor.current) * 100;
        const translate = Math.max(Math.min(rawTranslate, 40), -40); // Clamp to ±40%
        const tweenNode =
          tweenNodes.current[slideIndex % tweenNodes.current.length];
        if (tweenNode) tweenNode.style.transform = `translateX(${translate}%)`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className='flex-center flex-col gap-8 w-full max-w-5/6 mx-auto'>
      <div ref={emblaRef} className='overflow-hidden'>
        <div
          className='flex-center gap-4 w-full'
          style={{
            touchAction: 'pan-y pinch-zoom',
            marginLeft: 'calc(1rem * -1)',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src + i}
              className='flex-none w-[80%] min-w-0 pl-8 transform-gpu'
            >
              <div className='h-full rounded-xl overflow-hidden'>
                <div className='parallax-layer flex justify-center relative aspect-[16/9] w-full h-full rounded-xs bg-bgr border border-bgr/10 shadow-md shadow-bgr/50 cursor-pointer duration-300 ease-out overflow-hidden'>
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    // fill
                    className='object-cover object-center max-w-none flex-none w-full'
                    style={{
                      flexBasis: 'calc(115% + (var(--slide-spacing) * 2))',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
