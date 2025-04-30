'use client';

import { useState } from 'react';
import SlideshowImage from './SlideshowImage';

function Slideshow({ images = [] }) {
  if (!images.length) return null;

  const [currentIndex, setCurrentIndex] = useState(1);
  const lastIndex = images.length - 1;
  const prevIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

  return (
    <div className='flex-center gap-10 w-full h-fit py-6'>
      <SlideshowImage
        image={images[prevIndex]}
        index={prevIndex}
        setCurrentIndex={setCurrentIndex}
        current={false}
      />
      <SlideshowImage
        image={images[currentIndex]}
        index={currentIndex}
        setCurrentIndex={setCurrentIndex}
        current={true}
      />
      <SlideshowImage
        image={images[nextIndex]}
        index={nextIndex}
        setCurrentIndex={setCurrentIndex}
        current={false}
      />
    </div>
  );
}

export default Slideshow;
