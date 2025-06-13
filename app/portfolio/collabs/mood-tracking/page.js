import project from '@/portfolio/_data/mood-tracking-data';

import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import PageWrapper from '@/_components/containers/PageWrapper';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import PageHeading from '@/_components/text/PageHeading';
import MoodTrackingAbout from './_components/MoodTrackingAbout';
import MoodTrackingUiDemo from './_components/MoodTrackingUiDemo';
import MoodTrackingUiUx from './_components/MoodTrackingUiUx';
import MoodTrackingFeatures from './_components/MoodTrackingFeatures';

function Page() {
  return (
    <PageWrapper theme='dark' aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>{project.title}</PageHeading>

      <article className='flex flex-col items-center gap-10 p-article'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection theme='framed' className='w-9/10 md:w-8/10'>
          <ProjectAbout project={project}>
            <MoodTrackingAbout />
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
          <ProjectUiUx project={project} UiDemo={<MoodTrackingUiDemo />}>
            <MoodTrackingUiUx />
          </ProjectUiUx>
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <ProjectFeatureCards>
            <MoodTrackingFeatures />
          </ProjectFeatureCards>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
