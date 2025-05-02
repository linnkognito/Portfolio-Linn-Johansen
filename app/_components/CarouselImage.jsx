// import Image from 'next/image';

function CarouselImage({ image }) {
  return (
    <img
      key={image.src}
      src={image.src}
      alt={image.alt}
      // fill
      className='object-cover object-center max-w-none flex-none h-[19rem] block w-full'
      style={{
        flexBasis: 'calc(115% + (var(--slide-spacing) * 2))',
      }}
    />
  );
}

export default CarouselImage;
