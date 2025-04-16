import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ButtonCTA from '../_components/ButtonCTA';
import DividerVertical from '../_components/DividerVertical';

function HeroButtons() {
  return (
    <div className='flex items-center justify-between gap-6 h-fit'>
      <ButtonCTA>
        <Link href='/projects' className='tshadow-txt'>
          Discover
        </Link>
      </ButtonCTA>

      <DividerVertical />

      <button className='group py-1 tracking-widest uppercase'>
        <Link
          href='/projects'
          className='flex-center gap-2 tshadow-txt font-medium group-hover:font-bold'
        >
          <ChatBubbleLeftEllipsisIcon className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300 group-hover:border-pri group-hover:bg-sec/20 anim-prep transition-colors' />
          Connect
        </Link>
      </button>
    </div>
  );
}

export default HeroButtons;
