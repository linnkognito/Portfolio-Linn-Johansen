import Link from 'next/link';

function Logo() {
  return (
    <div>
      <Link
        href='/'
        className='text-2xl font-semibold text-heading tracking-widest'
      >
        <span className='text-slate-300 tracking-widest uppercase'>
          [ LiJo ]
        </span>
      </Link>
    </div>
  );
}

export default Logo;
