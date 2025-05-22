import Image from 'next/image';
import DividerHorizontal from '@_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ContainerPill from '@_components/ContainerPill';
import ActionButtons from '@_components/ActionButtons';
import SectionHeading from '@_components/SectionHeading';

function ProjectAbout({ children, image }) {
  return (
    <>
      <div
        className={`flex-center flex-col gap-4 w-full ${
          image ? 'max-w-1/2' : ''
        } p-div`}
      >
        <SectionHeading id='project-name' color='acc'>
          About
        </SectionHeading>

        <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />

        <ProjectCardDescription
          width='w-full'
          className={`${!image ? 'max-w-[75%]' : ''}`}
        >
          {children}
        </ProjectCardDescription>

        <ContainerPill
          theme='dark'
          width='min-w-fit w-8/10'
          className='mt-2 ml-4'
        >
          <ActionButtons
            buttonCTA={{ label: 'Live', href: '/' }}
            className='mx-auto pl-4'
            aria-label='Portfolio project action buttons'
          />
        </ContainerPill>
      </div>

      {image && (
        <div className='relative w-full max-w-1/2 aspect-[16/9] shadow-lg shadow-bgr rounded-xs'>
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
