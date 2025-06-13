import Image from 'next/image';
import DividerHorizontal from '@_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ContainerPill from '@/_components/containers/ContainerPill';
import ActionButtons from '@/_components/buttons/ActionButtons';
import SectionHeading from '@/_components/text/SectionHeading';

function ProjectAbout({ children, project }) {
  const { aboutImage: image, links } = project;

  const imageOrientations = {
    landscape: 'aspect-[16/9]',
    portrait: 'aspect-[9/16]',
  };

  return (
    <>
      <div
        className={`flex-center flex-col gap-4 w-full max-w-full ${
          image ? 'sm:max-w-1/2' : ''
        }`}
      >
        <SectionHeading id='project-name' color='pop' size='lgDynamic'>
          About
        </SectionHeading>

        <DividerHorizontal
          margin='m-0'
          width='w-full max-w-9/10 sm:max-w-4/5'
        />

        <ProjectCardDescription
          width='w-full max-w-4/5'
          padding='py-2'
          className={`${!image ? 'sm:max-w-[75%]' : ''}`}
        >
          {children}
        </ProjectCardDescription>

        <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />

        <ContainerPill
          theme='borderPopDark'
          width='min-w-fit max-w-[450px]'
          className='mt-2 mx-auto max-md:text-sm'
        >
          <ActionButtons
            buttonCTA={links.live ? { label: 'Live', href: links.live } : false}
            buttonGithub={{ href: links.github }}
            className='mx-auto px-4'
            aria-label='Portfolio project action buttons'
          />
        </ContainerPill>
      </div>

      {image && (
        <div
          className={`max-sm:hidden relative w-full sm:max-w-1/2 max-h-[450px] shadow-subtle-sdw rounded-xs ${
            image.orientation
              ? imageOrientations[image.orientation]
              : imageOrientations.landscape
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover object-center rounded-xs'
          />
        </div>
      )}
    </>
  );
}

export default ProjectAbout;
