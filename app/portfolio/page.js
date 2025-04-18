import ProjectCards from '@/_projects/ProjectCards';
import ProjectCard from '@_projects/ProjectCard';
import DividerHorizontal from '@_components/DividerHorizontal';

function Page() {
  return (
    <section
      className='min-h-fit p-section bg-bgr/5 rounded-xs backdrop-blur-xs'
      aria-labelledby='portfolio-heading'
    >
      <h1
        id='portfolio-heading'
        className='sm:max-w-4/5 pb-4 px-12 mx-4 sm:mx-auto text-2xl sm:text-3xl text-center text-heading text-pri font-semibold tracking-[0.9em] tshadow-glow border-b border-pri/30 uppercase'
      >
        Projects
      </h1>

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
