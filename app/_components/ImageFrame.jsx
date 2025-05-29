import Image from 'next/image';

function ImageFrame({
  image,
  theme = 'base',
  aspect = 'aspect-[16/9]',
  className = '',
}) {
  if (!image) return null;

  const styles = {
    base: 'w-full p-4 border border-pri/30 rounded-xs shadow-xl shadow-sdw/30',
    avatar:
      'w-[200px] h-[200px] p-4 border border-pri/30 rounded-xs overflow-hidden shadow-xl shadow-sdw/30',
  };

  return (
    <div className={`${styles[theme]} ${className}`}>
      <div className={`relative rounded-xs shadow-subtle-pri ${aspect}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className='object-cover object-center border border-pri rounded-xs'
        />
      </div>
    </div>
  );
}

export default ImageFrame;
