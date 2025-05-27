import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';
import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/text/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import ProjectFeatureCards from '@/_components/projects/ProjectFeatureCards';
import PageWrapper from '@/_components/containers/PageWrapper';

function Page({ title = 'Example project' }) {
  const project = {
    title: 'Portfolio Template',
    technologies: [
      { title: 'Sanity', icon: <Sanity /> },
      { title: 'React.js', icon: <Reactjs /> },
      { title: 'Tailwind CSS', icon: <Tailwind /> },
    ],
    mainImage: {
      src: '/creativeportfolio-mockup.png',
      alt: 'Example image 0',
    },
    images: [
      { src: '/rose.png', alt: 'Example image 1' },
      { src: '/spike.png', alt: 'Example image 2' },
      { src: '/simon-lee-david.jpg', alt: 'Example image 3' },
      { src: '/vackground-com.jpg', alt: 'Example image 4' },
      { src: '/rose.png', alt: 'Example image 1' },
      { src: '/spike.png', alt: 'Example image 2' },
      { src: '/simon-lee-david.jpg', alt: 'Example image 3' },
      { src: '/vackground-com.jpg', alt: 'Example image 4' },
    ],
  };

  return (
    <PageWrapper theme='dark' aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>{title}</PageHeading>
      <article className='flex flex-col items-center gap-10 p-section'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection theme='framed'>
          <ProjectAbout />
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
          <ProjectUiUx />
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
