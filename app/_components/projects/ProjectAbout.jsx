import Image from 'next/image';
import DividerHorizontal from '@_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ContainerPill from '@/_components/containers/ContainerPill';
import ActionButtons from '@/_components/buttons/ActionButtons';
import SectionHeading from '@/_components/text/SectionHeading';

function ProjectAbout({ children, project }) {
  const { aboutImage: image, links } = project;
  console.log(!image);

  const imageOrientations = {
    landscape: 'aspect-[16/9]',
    portrait: 'aspect-[9/16]',
  };

  return (
    <>
      <div
        className={`flex-center flex-col gap-4 w-full ${
          image ? 'max-w-1/2' : 'max-w-full'
        } p-div`}
      >
        <SectionHeading id='project-name' color='pop'>
          About
        </SectionHeading>

        <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />

        <ProjectCardDescription
          width='w-full'
          padding='py-2'
          className={`${!image ? 'max-w-[75%]' : ''}`}
        >
          {children}
        </ProjectCardDescription>

        <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />

        <ContainerPill
          theme='borderPopDark'
          width='min-w-fit w-8/10 max-w-[450px]'
          className='mt-2 ml-4'
        >
          <ActionButtons
            buttonCTA={{ label: 'Live', href: links.live }}
            buttonGithub={{ href: links.github }}
            className='mx-auto pl-4'
            aria-label='Portfolio project action buttons'
          />
        </ContainerPill>
      </div>

      {image && (
        <div
          className={`relative w-full max-w-1/2 max-h-[450px]  shadow-subtle-sdw rounded-xs ${
            imageOrientations[image.orientation || 'landscape']
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
