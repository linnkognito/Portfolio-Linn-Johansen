import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function ButtonConnect() {
  return (
    <Link
      href='/contact'
      className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus-ring'
      aria-label='Link to Contact page'
    >
      <ChatBubbleLeftEllipsisIcon
        className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-txt border border-indigo-300 group-hover:border-pop group-hover:bg-sec/30 group-hover:tshadow-txt group-hover:shadow-[0_0_7px_#d9f99d] anim-prep transition-colors'
        aria-hidden='true'
      />
      Connect
    </Link>
  );
}

export default ButtonConnect;
