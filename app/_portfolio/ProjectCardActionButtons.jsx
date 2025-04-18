import { Github } from '@react-symbols/icons';
import Link from 'next/link';
import ButtonCTA from '../_components/ButtonCTA';
import Separator from '../_components/Separator';

function ProjectCardActionButtons({
  className = '',
  buttonCTA = 'Details',
  buttonIcon = 'GitHub',
}) {
  return (
    <div
      className={`flex items-center justify-between gap-6 w-fit h-fit ${className}`}
      role='group'
      aria-label='Hero action buttons'
    >
      <ButtonCTA ariaLabel='Learn more about this project'>
        <Link href='/projects' className='tshadow-txt'>
          {buttonCTA}
        </Link>
      </ButtonCTA>

      <Separator />

      <Link
        href='/projects'
        className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold'
        aria-label='Connect with me'
      >
        <Github
          className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300  group-hover:bg-sec/20 anim-prep transition-colors'
          aria-hidden='true'
        />
        {buttonIcon}
      </Link>
    </div>
  );
}

export default ProjectCardActionButtons;
