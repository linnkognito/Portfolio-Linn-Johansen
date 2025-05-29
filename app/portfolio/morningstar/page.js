import project from '@/portfolio/_data/morningstar-data';

import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import PageWrapper from '@/_components/containers/PageWrapper';
import MorningstarUiDemo from './_components/MorningstarUiDemo';
import MorningstarAbout from './_components/MorningstarAbout';
import MorningstarUiUx from './_components/MorningstarUiUx';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import MorningstarFeatures from './_components/MorningstarFeatures';
import PageHeading from '@/_components/text/PageHeading';

function Page() {
  return (
    <PageWrapper
      theme='dark'
      aria-labelledby='portfolio-heading'
      className='flex-center flex-col'
    >
      <PageHeading id='portfolio-heading'>{project.title}</PageHeading>

      <article className='flex flex-col items-center gap-10 p-section'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection theme='framed' className='w-9/10 w-8/10'>
          <ProjectAbout project={project}>
            <MorningstarAbout />
          </ProjectAbout>
        </ProjectSection>

        {/* Carousel */}
        <ProjectSection theme='plain'>
          <EmblaCarousel
            slides={project.images}
            options={{ dragFree: true, loop: true }}
          />
        </ProjectSection>

        {/* UI/UX */}
        <ProjectSection theme='framed' className='w-9/10 md:w-8/10'>
          <ProjectUiUx project={project} UiDemo={<MorningstarUiDemo />}>
            <MorningstarUiUx />
          </ProjectUiUx>
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards>
            <MorningstarFeatures />
          </ProjectFeatureCards>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
