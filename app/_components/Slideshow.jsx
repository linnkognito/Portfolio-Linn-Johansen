'use client';

import { useState } from 'react';
import SlideshowImage from './SlideshowImage';
import SlideshowButtons from './SlideshowButtons';

function Slideshow({ images = [] }) {
  if (!images.length) return null;

  const [currentIndex, setCurrentIndex] = useState(1);
  const lastIndex = images.length - 1;
  const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

  return (
    <div className='w-full h-fit flex-center flex-col gap-8'>
      <div className='flex-center gap-6 w-full min-h-fit'>
        <SlideshowImage
          image={images[prevIndex]}
          index={prevIndex}
          position='left'
          animate={prevControls}
          setCurrentIndex={minimizeSlide}
        />
        <SlideshowImage
          image={images[currentIndex]}
          index={currentIndex}
          current={true}
          animate={currentControls}
          setCurrentIndex={minimizeSlide}
        />
        <SlideshowImage
          image={images[nextIndex]}
          index={nextIndex}
          animate={nextControls}
          setCurrentIndex={minimizeSlide}
        />
      </div>

      <SlideshowButtons
        amount={images.length}
        index={currentIndex}
        setCurrentIndex={setCurrentIndex}
        position='right'
      />
    </div>
  );
}

export default Slideshow;
