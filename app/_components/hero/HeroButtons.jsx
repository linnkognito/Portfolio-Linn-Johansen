import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ButtonCTA from '@_components/ButtonCTA';
import Separator from '@/_components/dividers/Separator';

function HeroButtons({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-between gap-6 h-fit ${className}`}
      role='group'
      aria-label='Hero action buttons'
    >
      <ButtonCTA ariaLabel='Discover projects'>
        <Link href='/portfolio' className='tshadow-txt'>
          Discover
        </Link>
      </ButtonCTA>

      <Separator />

      <Link
        href='/contact'
        className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus:outline-none focus:ring-2 focus:ring-pri focus:ring-offset-2'
        aria-label='Connect with me'
      >
        <ChatBubbleLeftEllipsisIcon
          className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300 group-hover:border-txt group-hover:bg-sec/30 group-hover:tshadow-txt group-hover:shadow-sm group-hover:shadow-txt anim-prep transition-colors'
          aria-hidden='true'
        />
        Connect
      </Link>
    </div>
  );
}

export default HeroButtons;
