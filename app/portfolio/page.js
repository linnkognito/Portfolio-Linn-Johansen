import ProjectCards from '../_portfolio/ProjectCards';
import ProjectCard from '@/app/_projects/ProjectCard';
import DividerHorizontal from '../_components/DividerHorizontal';

function Page() {
  return (
    <section
      className='w-full min-h-fit p-section bg-pri/5 rounded-xs'
      aria-labelledby='portfolio-heading'
    >
      <h1
        id='portfolio-heading'
        className='max-w-full sm:max-w-4/5 pb-4 px-12 mx-4 sm:mx-auto text-2xl sm:text-3xl text-center text-heading text-pri font-semibold tracking-[0.9em] tshadow-glow border-b border-pri/30 uppercase'
      >
        Projects
      </h1>

      <div className='w-full p-section'>
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
