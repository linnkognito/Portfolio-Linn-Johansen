import { Github } from '@react-symbols/icons';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ButtonCTA from '@/_components/buttons/ButtonCTA';
import Separator from '@/_components/dividers/Separator';

function ActionButtons({
  theme = 'base',
  buttonCTA = null,
  buttonGithub = null,
  className = '',
  ...props
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 sm:gap-6 w-fit h-fit ${className}`}
      role='group'
      {...props}
    >
      <ButtonCTA
        ariaLabel='Go to live version'
        className='group hover:shadow-[0_0_4px_#f8fafc]'
      >
        <Link
          href={buttonCTA?.href || '/'}
          className='tshadow-txt group-hover:text-pop hover:tshadow-pop'
        >
          {buttonCTA?.label || 'More'}
        </Link>
      </ButtonCTA>

      <Separator />

      {theme === 'base' && (
        <a
          href={buttonGithub?.href || 'https://github.com/linnkognito'}
          target='_blank'
          rel='noopener noreferrer'
          className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus-ring'
          aria-label='Link to my GitHub'
        >
          <Github
            className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300 group-hover:border-pri group-hover:bg-sec/30 anim-prep transition-colors'
            aria-hidden='true'
          />
          GitHub
        </a>
      )}

      {theme === 'hero' && (
        <Link
          href='/contact'
          className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus-ring'
          aria-label='Connect with me'
        >
          <ChatBubbleLeftEllipsisIcon
            className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-txt border border-indigo-300 group-hover:border-pop group-hover:bg-sec/30 group-hover:tshadow-txt group-hover:shadow-[0_0_7px_#d9f99d] anim-prep transition-colors'
            aria-hidden='true'
          />
          Connect
        </Link>
      )}
    </div>
  );
}

export default ActionButtons;
