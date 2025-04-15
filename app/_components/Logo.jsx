import Link from 'next/link';
import Circle from './Circle';

function Logo() {
  return (
    <div className='hover:scale-120 anim-tran'>
      <Link
        href='/'
        className='text-2xl font-semibold text-heading tracking-widest'
      >
        <span className='text-slate-300 tracking-widest tshadow-txt uppercase'>
          [ <span className='text-pri'>LiJo</span> ]
        </span>
      </Link>
    </div>
  );
}

export default Logo;
