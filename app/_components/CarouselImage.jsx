'use client';

import Image from 'next/image';

function CarouselImage({ image }) {
  return (
    <div
      className={`relative aspect-[16/9] min-w-1/3 h-full rounded-xs overflow-hidden bg-bgr border border-bgr/10 shadow-md shadow-bgr/50 cursor-pointer`}
    >
      {/* Parallax wrapper */}
      <div className='parallax-layer transition-transform duration-300 ease-out w-full h-full relative'>
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className='object-cover object-center'
        />
      </div>
    </div>
  );
}

export default CarouselImage;
