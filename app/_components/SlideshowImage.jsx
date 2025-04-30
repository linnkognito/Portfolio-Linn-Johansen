import Image from 'next/image';

function SlideshowImage({
  image,
  index,
  position,
  current = false,
  animate,
  setCurrentIndex,
}) {
  return (
    <div
      initial={{ scale: 0 }}
      animate={animate}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`relative aspect-[16/9] w-1/3 h-full p-section rounded-xs overflow-hidden bg-bgr border border-bgr/10 shadow-md shadow-bgr/50 transition-transform duration-300 ease-in-out cursor-pointer ${
        current
          ? 'hover:scale-110 z-10'
          : 'scale-85 opacity-70 hover:scale-90 hover:opacity-100'
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

      {/* Gradient */}
      {!current && (
        <div
          className={`absolute inset-0 from-bgr to-transparent hover:opacity-0 transition-opacity duration-300 ease-in-out ${
            position === 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'
          }`}
        />
      )}
    </div>
  );
}

export default SlideshowImage;
