import AboutBio from '@/_components/about/AboutBio';
import SectionHeading from '@/_components/text/SectionHeading';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ProjectSection from '@/_components/projects/ProjectSection';
import ContentWrapper from '@/_components/containers/ContentWrapper';
import Image from 'next/image';
import ColorOverlay from '../ui/ColorOverlay';
import Cube from '../containers/Cube';
import Link from 'next/link';

function AboutSectionIntro({ children, className = '' }) {
  return (
    <section className='grid grid-cols-1 gap-4 max-w-[600px] mx-auto'>
      <div className='grid grid-cols-3 gap-2 h-full'>
        <Cube border='pop' className='cursor-crosshair'>
          <Link href='/connect'>
            <p className='px-2 text-5xl md:text-6xl font-medium text-heading text-pop tshadow-txt group-hover:scale-130 group-hover:-rotate-20 transition-all duration-500 ease-out'>
              PDX
            </p>
          </Link>
        </Cube>

        {/* Profile picture */}
        <Cube border='sec' className='relative'>
          <Image
            src='/pp-line.jpg'
            alt='Profile picture of Linn Johansen'
            fill
            className='object-cover object-center'
          />
          <ColorOverlay color='sec' />
        </Cube>

        <a
          href='/files/resume-linn-johansen.pdf'
          alt='Download my resume'
          title='Download my resume'
          download
          className='cursor-crosshair'
        >
          <Cube
            theme='minimal'
            border='pri'
            className='group aspect-square flex-center overflow-hidden'
          >
            <p className='px-2 text-5xl md:text-6xl font-medium text-heading text-txt tshadow-txt group-hover:scale-150 group-hover:rotate-20 transition-all duration-500 ease-out'>
              CV
            </p>
          </Cube>
        </a>

        {/* Tech stack */}
      </div>

      <div className='flex flex-col gap-4 min-h-0 h-full overflow-y-auto'>
        <ProjectSection
          theme='framedSmall'
          className='flex-col gap-4 h-fit p-10 bg-bgr/80'
        >
          <SectionHeading size='lgDynamic'>Bio</SectionHeading>
          <DividerHorizontal color='pop' />
          <AboutBio />
        </ProjectSection>
      </div>

      {/* Languages (Icon + text) */}
      {/* Interests */}
    </section>
  );
}

export default AboutSectionIntro;
