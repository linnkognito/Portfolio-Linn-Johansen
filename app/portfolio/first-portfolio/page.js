import project from '@/portfolio/_data/first-portfolio-data';

import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/text/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import PageWrapper from '@/_components/containers/PageWrapper';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import FirstPortfolioAbout from './_components/FirstPortfolioAbout';

function Page() {
  return (
    <PageWrapper theme='dark' aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>{project.title}</PageHeading>

      <article className='flex flex-col items-center gap-10 p-section'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection theme='framed' className='w-8/10'>
          <ProjectAbout project={project}>
            <FirstPortfolioAbout />
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
        <ProjectSection theme='framed' className='w-8/10'>
          <ProjectUiUx project={project} UiDemo={null}></ProjectUiUx>
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards></ProjectFeatureCards>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
