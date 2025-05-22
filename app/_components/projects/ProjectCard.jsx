import Image from 'next/image';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ActionButtons from '@/_components/ActionButtons';
import ContainerPill from '@/_components/ContainerPill';

function ProjectCard({ project = null }) {
  if (!project) return null;

  const { title, description, path, image } = project;

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-full h-auto px-4 py-4 bg-bgr/85 border border-pri/50 rounded-xs backdrop-blur-lg shadow-md shadow-sdw/50'>
      {/* Preview Image */}
      <div className='relative w-full lg:max-w-1/2 aspect-[16/9] border border-pri/50 rounded-xs shadow shadow-pri/50'>
        <Image
          src={image.src}
          alt={`Preview image for ${project.title}`}
          fill
          className='object-cover object-center rounded-xs'
        />
      </div>

      {/* Project Details Preview */}
      <div className='flex flex-col gap-4 w-full lg:max-w-1/2 p-div'>
        <h2
          className='pl-2 text-2xl text-heading text-pop font-semibold tracking-[0.2em] uppercase'
          id='project-name'
        >
          {title}
        </h2>
        <DividerHorizontal margin='my-1' />
        <ProjectCardDescription width='w-full' padding='pl-1 pr-2'>
          {description}
        </ProjectCardDescription>
        <DividerHorizontal margin='my-1' />

        <ContainerPill
          theme='dark'
          width='w-fit'
          className='shadow-md shadow-bgr/50'
        >
          <ActionButtons
            buttonCTA={{ label: 'Details', href: path }}
            aria-label='Portfolio project action buttons'
            className='pl-1'
          />
        </ContainerPill>
      </div>
    </div>
  );
}

export default ProjectCard;
