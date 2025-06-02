import { Github } from '@react-symbols/icons';

function ButtonGithub({ buttonGithub = null }) {
  return (
    <a
      href={buttonGithub?.href || 'https://github.com/linnkognito'}
      target='_blank'
      rel='noopener noreferrer'
      className='group py-1 tracking-widest uppercase flex-center gap-2 tshadow-txt font-medium hover:font-bold focus-ring'
      aria-label='Link to Linn Johansen’s GitHub profile'
    >
      <Github
        className='h-6 w-6 p-1 bg-pri/20 shadow-around rounded-full text-pri border border-indigo-300 group-hover:border-pri group-hover:bg-sec/30 anim-prep transition-colors'
        aria-hidden='true'
      />
      GitHub
    </a>
  );
}

export default ButtonGithub;
