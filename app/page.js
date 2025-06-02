import H1 from '@/_components/text/H1';
import ProjectSection from '@/_components/projects/ProjectSection';
import ActionButtons from '@/_components/buttons/ActionButtons';
import ButtonCTA from './_components/buttons/ButtonCTA';
import ButtonConnect from './_components/buttons/ButtonConnect';
import Link from 'next/link';

export default function Home() {
  return (
    <section
      aria-labelledby='index-heading'
      className='relative w-full p-div sm:p-section bg-bgr/60 backdrop-blur-xs'
    >
      {/* Desktop */}
      <article className='hidden sm:flex flex-col pl-10 pt-[15vh]'>
        <H1 />

        <div className='flex w-full max-w-1/3 pl-6 pt-8 text-justify'>
          <ActionButtons
            theme='hero'
            buttonCTA={{ label: 'Discover', href: '/portfolio' }}
            aria-label='Hero section action buttons'
          />
        </div>
      </article>

      {/* Mobile */}
      <ProjectSection
        theme='index'
        className='sm:hidden flex-1 flex-center flex-col items-center gap-8 w-full h-full overflow-hidden'
      >
        <H1 />

        <Link href='/portfolio'>
          <ButtonCTA type='right' color='pop'>
            Discover
          </ButtonCTA>
        </Link>
      </ProjectSection>
    </section>
  );
}
