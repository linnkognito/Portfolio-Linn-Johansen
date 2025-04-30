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
      <div className='flex-center gap-8 w-full min-h-fit'>
        <SlideshowImage
          image={images[prevIndex]}
          index={prevIndex}
          setCurrentIndex={setCurrentIndex}
          position='left'
        />
        <SlideshowImage
          image={images[currentIndex]}
          index={currentIndex}
          current={true}
          setCurrentIndex={setCurrentIndex}
        />
        <SlideshowImage
          image={images[nextIndex]}
          index={nextIndex}
          setCurrentIndex={setCurrentIndex}
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
