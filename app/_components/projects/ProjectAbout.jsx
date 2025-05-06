import Image from 'next/image';
import DividerHorizontal from '../dividers/DividerHorizontal';
import ProjectCardDescription from './ProjectCardDescription';
import ContainerPill from '../ContainerPill';
import ProjectCardActionButtons from './ProjectCardActionButtons';
import SectionHeading from '../SectionHeading';

function ProjectAbout() {
  return (
    <>
      <div className='flex-center flex-col gap-4 w-full max-w-1/2 p-div'>
        <SectionHeading id='project-name' color='acc'>
          About
        </SectionHeading>

        <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />

        <ProjectCardDescription width='w-full' expand={false} />

        <ContainerPill
          theme='dark'
          width='min-w-fit w-8/10'
          className='mt-2 ml-4'
        >
          <ProjectCardActionButtons
            buttonCTA='Live'
            buttonIcon='Code'
            className='mx-auto pl-4'
          />
        </ContainerPill>
      </div>

      <div className='relative w-full max-w-1/2 aspect-[16/9] shadow-lg shadow-bgr rounded-xs'>
        <Image
          src='/creativeportfolio-mockup.png'
          alt=''
          fill
          className='object-cover object-center rounded-xs'
        />
      </div>
    </>
  );
}

export default ProjectAbout;
