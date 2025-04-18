import Link from 'next/link';

function Logo() {
  return (
    <div className='hover:scale-120 anim-tran'>
      <Link
        href='/'
        className='text-2xl font-semibold text-heading tracking-widest'
        aria-label='LiJo - Home'
      >
        <span
          className='text-slate-300 tracking-widest tshadow-txt uppercase'
          aria-hidden='true'
        >
          [ <span className='text-pri'>LiJo</span> ]
        </span>
      </Link>
    </div>
  );
}

export default Logo;
