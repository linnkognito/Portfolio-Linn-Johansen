import ProjectCardActionButtons from '@/app/_portfolio/ProjectCardActionButtons';
import ProjectCardImage from '@/app/_portfolio/project-card-1/ProjectCardImage';
import ProjectCardText from '@/app/_portfolio/project-card-1/ProjectCardText';

function ProjectCard({ position = 'middle' }) {
  return (
    <article
      className='flex flex-col gap-6 w-full max-w-[1024px] h-full min-h-fit'
      aria-labelledby='project-title'
    >
      <div className='flex flex-col h-full px-10'>
        <div className='flex gap-4 h-[200px]'>
          <ProjectCardImage src='/simon-lee-david.jpg' />
          <ProjectCardText position={position} />
        </div>
        <ProjectCardActionButtons className='w-full min-w-[574px] justify-end pr-10 pt-2' />
      </div>
    </article>
  );
}

export default ProjectCard;
