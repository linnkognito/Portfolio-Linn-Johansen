import Image from 'next/image';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ActionButtons from '@/_components/buttons/ActionButtons';
import ContainerPill from '@/_components/containers/ContainerPill';
import ProjectLabel from './ProjectLabel';

function ProjectCard({ project = null }) {
  if (!project) return null;

  const {
    title,
    shortDescription: description,
    path,
    mainImage,
    links,
    isCourseWork,
    isUnderConstruction,
  } = project;

  return (
    <div className='flex flex-col lg:flex-row gap-4 w-full h-auto px-4 py-4 bg-bgr/85 border border-pri/50 rounded-xs backdrop-blur-lg shadow-md shadow-sdw/50'>
      {/* Preview Image */}
      <div className='relative w-full lg:max-w-1/2 aspect-[16/9] border border-pri/50 rounded-xs shadow shadow-pri/50'>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className='object-cover object-center rounded-xs'
        />
      </div>

      {/* Project Details Preview */}
      <div className='relative flex flex-col gap-4 w-full lg:max-w-1/2 p-div'>
        {/* Label */}
        <ProjectLabel
          isCourseWork={isCourseWork}
          isUnderConstruction={isUnderConstruction}
        />
        <h2
          className='pl-2 text-2xl text-heading text-pop font-semibold tracking-[0.2em] uppercase'
          id='project-name'
        >
          {title}
        </h2>

        <DividerHorizontal margin='my-1' />

        {/* Description */}
        <ProjectCardDescription width='w-full' padding='pl-1 pr-2'>
          {description}
        </ProjectCardDescription>

        <DividerHorizontal margin='my-1' />

        {/* Action Buttons */}
        <ContainerPill
          theme='dark'
          className='hidden sm:block shadow-md shadow-bgr/50'
        >
          <ActionButtons
            buttonCTA={{ label: 'Details', href: path }}
            buttonGithub={{ href: links.github }}
            aria-label='Portfolio project action buttons'
            className='pl-1'
          />
        </ContainerPill>

        {/* Mobile */}
        <ContainerPill
          theme='darkSm'
          className='sm:hidden shadow-md shadow-bgr/50'
        >
          <ActionButtons
            buttonCTA={{ label: 'Details', href: path }}
            buttonGithub={{ href: links.github }}
            aria-label='Portfolio project action buttons'
            className='pl-1'
          />
        </ContainerPill>
      </div>
    </div>
  );
}

export default ProjectCard;
