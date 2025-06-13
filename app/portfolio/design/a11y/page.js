import project from '@/portfolio/_data/a11y-data';

import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/text/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import PageWrapper from '@/_components/containers/PageWrapper';
import A11yAbout from './_components/A11yAbout';
import A11yFeatures from './_components/A11yFeatures';
import ActionButtons from '@/_components/buttons/ActionButtons';
import ContainerPill from '@/_components/containers/ContainerPill';
import ButtonCTA from '@/_components/buttons/ButtonCTA';
import Link from 'next/link';

function Page() {
  console.log(project);
  return (
    <PageWrapper
      theme='dark'
      aria-labelledby='portfolio-heading'
      className='flex-center flex-col'
    >
      <PageHeading id='portfolio-heading'>{project.title}</PageHeading>

      <article className='flex flex-col items-center gap-10 p-article'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection
          theme='framed'
          className='flex flex-col w-9/10 md:w-8/10'
        >
          <ProjectAbout project={project}>
            <A11yAbout />
          </ProjectAbout>
        </ProjectSection>

        {/* Carousel */}
        <ProjectSection theme='plain'>
          <EmblaCarousel
            slides={project.images}
            options={{ dragFree: true, loop: true }}
          />
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards>
            <A11yFeatures />
          </ProjectFeatureCards>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
