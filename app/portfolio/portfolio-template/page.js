import project from '@/portfolio/_data/portfolio-template-data';

import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/text/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import PageWrapper from '@/_components/containers/PageWrapper';
import PortfolioTemplateAbout from './_components/PortfolioTemplateAbout';
import PortfolioTemplateUiDemo from './_components/PortfolioTemplateUiDemo';
import PortfolioTemplateUiUx from './_components/PortfolioTemplateUiUx';
import PortfolioTemplateFeatures from './_components/PortfolioTemplateFeatures';

function Page() {
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
        <ProjectSection theme='framed' className='w-9/10 md:w-8/10'>
          <ProjectAbout project={project}>
            <PortfolioTemplateAbout />
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
          <ProjectUiUx project={project} UiDemo={<PortfolioTemplateUiDemo />}>
            <PortfolioTemplateUiUx />
          </ProjectUiUx>
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards>
            <PortfolioTemplateFeatures />
          </ProjectFeatureCards>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
