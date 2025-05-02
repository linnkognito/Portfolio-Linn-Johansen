import { Github } from '@react-symbols/icons';
import Link from 'next/link';
import ButtonCTA from '@_components/ButtonCTA';
import Separator from '@/_components/dividers/Separator';

function ProjectCardActionButtons({ buttonCTA = 'Live', className = '' }) {
  return (
    <div
      className={`flex items-center justify-between gap-6 w-fit h-fit ${className}`}
      role='group'
      aria-label='Hero action buttons'
    >
      <ButtonCTA ariaLabel='Go to live version'>
        <Link
          href='/projects'
          className='tshadow-txt hover:text-pop hover:tshadow-pop'
        >
          {buttonCTA}
        </Link>
      </ButtonCTA>

      <Separator />

      <Link
        href='/projects'
        className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus:outline-none focus:ring-2 focus:ring-pri focus:ring-offset-2'
        aria-label='Connect with me'
      >
        <Github
          className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300 group-hover:border-pri group-hover:bg-sec/30 anim-prep transition-colors'
          aria-hidden='true'
        />
        GitHub
      </Link>
    </div>
  );
}

export default ProjectCardActionButtons;
