import Image from 'next/image';

function SlideshowImage({ image, index, setCurrentIndex, current = false }) {
  return (
    <div
      className={`relative aspect-[16/9] w-1/3 h-full p-section rounded-xs overflow-hidden bg-bgr shadow-around-glow transition-transform duration-300 ease-in-out cursor-pointer ${
        current
          ? 'hover:scale-110 z-10'
          : 'opacity-70 hover:scale-110 hover:opacity-100'
      }`}
      onClick={() => setCurrentIndex(index)}
    >
      <Image
        key={image.src}
        src={image.src}
        alt={image.alt}
        fill
        className='object-cover object-center'
      />
      {!current && <div className='absolute inset-0 bg-bgr/20' />}
    </div>
  );
}

export default SlideshowImage;
