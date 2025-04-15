import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function ButtonsCta({ children }) {
  return (
    <div className='flex items-center justify-between h-fit gap-6'>
      <button className='px-8 border border-indigo-300 rounded-bl-xl rounded-tr-xl tracking-widest font-medium uppercase hover:bg-pri/20 hover:font-bold'>
        <Link href='/projects' className='tshadow-txt'>
          Discover
        </Link>
      </button>

      <span
        aria-hidden='true'
        className='h-6 text-5xl border-r border-indigo-300/30'
      ></span>

      <button className='py-1 tracking-widest font-medium uppercase'>
        <Link
          href='/projects'
          className='flex-center gap-2 tshadow-txt hover:font-bold'
        >
          <ChatBubbleLeftEllipsisIcon className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300' />
          Connect
        </Link>
      </button>
    </div>
  );
}

export default ButtonsCta;
