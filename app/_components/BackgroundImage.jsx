import Image from 'next/image';

function BackgroundImage() {
  return (
    <div
      role='img'
      className='fixed inset-10 flex items-center justify-end z-[-1]'
    >
      <Image
        src='/spike.png'
        alt='Home page background image'
        fill
        className='object-contain object-right pr-10'
      />
    </div>
  );
}

export default BackgroundImage;
