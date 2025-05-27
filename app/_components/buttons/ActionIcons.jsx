import { PlayCircleIcon } from '@heroicons/react/24/outline';
import { Github } from '@react-symbols/icons';

function ActionIcons({ links }) {
  return (
    <div className='flex-center gap-2 pb-4 pr-12'>
      <a href={links.live} alt='Project live version' title='Live'>
        <PlayCircleIcon className='h-6 text-pop hover:scale-115 will-change-transform duration-300 ease-in-out' />
      </a>
      <a href={links.github} alt='Project GitHub link' title='GitHub'>
        <Github className='h-6 text-sdw hover:scale-115 will-change-transform duration-300 ease-in-out' />
      </a>
    </div>
  );
}

export default ActionIcons;
