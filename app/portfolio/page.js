import ProjectCards from '@/_components/projects/ProjectCards';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import PageHeading from '@/_components/PageHeading';

function Page() {
  return (
    <section
      className='min-h-fit p-section bg-bgr/5 rounded-xs backdrop-blur-xs'
      aria-labelledby='portfolio-heading'
    >
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <ProjectCards>
          <ProjectCard />
          <DividerHorizontal />
          <ProjectCard />
          <DividerHorizontal />
          <ProjectCard />
          <DividerHorizontal />
          <ProjectCard />
        </ProjectCards>
      </div>
    </section>
  );
}

export default Page;
