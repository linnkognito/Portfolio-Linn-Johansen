import Image from 'next/image';

function ProjectCardImage({ src, shadow = 'shadow-glow-sdw', className = '' }) {
  return (
    <figure
      className={`relative aspect-square max-h-[450px] rounded-full  ${shadow} ${className}`}
    >
      <Image
        src={src}
        alt='Project preview image'
        fill
        className='object-cover object-left rounded-full'
        priority
      />
    </figure>
  );
}
export default ProjectCardImage;
