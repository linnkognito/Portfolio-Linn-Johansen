import project from '@/portfolio/portfolio-template/portfolio-template-data';

import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';
import { Bold } from '@/_components/TextStyles';
import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import PageWrapper from '@/_components/PageWrapper';

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
        <ProjectSection theme='framed'>
          <ProjectAbout image={project.aboutImage}>
            <p>
              <Bold>Single-page</Bold> template intended to showcase what a
              custom creative portfolio built by me could potentially look like.
            </p>
            <p>
              Built with <Bold>React</Bold> & <Bold>Tailwind CSS</Bold>, this
              website scales nicely from mobile devices up to large screens.
            </p>
            <p>
              The text & image content of this site is easily added & updated
              through <Bold>Sanity.io (headless CMS)</Bold>.
            </p>
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
        <ProjectSection theme='framed'>
          <ProjectUiUx project={project} />
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards />
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
