import PageHeading from '@/_components/text/PageHeading';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContainerPill from '@/_components/containers/ContainerPill';
import ActionButtons from '@/_components/buttons/ActionButtons';
import ImageFrame from '@/_components/ImageFrame';
import AboutBio from '@/_components/about/AboutBio';
import ContentWrapper from '../containers/ContentWrapper';

function AboutIntroSection() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center justify-center gap-10 w-full mx-auto max-md:mx-0 p-section'>
      <div className='flex-center flex-col gap-4'>
        <PageHeading id='about-heading' border={false}>
          About
        </PageHeading>
        <DividerHorizontal margin='m-0' />

        <div className='flex items-center flex-col gap-4 w-full py-4 px-10 text-justify'>
          <AboutBio />
        </div>

        <DividerHorizontal />

        <ContainerPill
          theme='borderPopDark'
          width='w-fit'
          className='shadow-md shadow-bgr/50'
        >
          <ActionButtons
            buttonCTA={{
              label: 'Resume',
              ariaLabel: 'Download Linn Johansen’s resume as a PDF',
              href: '/files/resume-linnjohansen.pdf',
            }}
            aria-label='Portfolio project action buttons'
            className='px-4'
          />
        </ContainerPill>
      </div>

      {/* <ContentWrapper
        border='pop'
        className='flex justify-start items-start h-full'
      >
        <ImageFrame
          theme='avatar'
          image={{
            src: '/pp-line.jpg',
            alt: 'Profile picture of Linn Johansen',
          }}
          aspect='aspect-square'
        />
      </ContentWrapper> */}
    </section>
  );
}

export default AboutIntroSection;
