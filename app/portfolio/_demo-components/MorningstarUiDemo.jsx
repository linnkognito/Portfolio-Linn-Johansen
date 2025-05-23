import Image from 'next/image';

function MorningstarUiDemo() {
  return (
    <div className='relative aspect-[9/16] m-4  rounded-xs shadow-subtle-pri'>
      <Image
        src='/morningstar-small-nav.png'
        fill
        alt='Home page for small screens with dropdown navigation menu visible'
        className='object-center object-cover border border-pop rounded-xs'
      />
    </div>
  );
}

export default MorningstarUiDemo;
