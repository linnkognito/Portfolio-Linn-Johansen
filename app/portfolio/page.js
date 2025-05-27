import portfolioTemplate from '@/portfolio/_data/portfolio-template-data';
import morningstar from '@/portfolio/_data/morningstar-data';
import firstPortfolio from '@/portfolio/_data/first-portfolio-data';
import arrayWorkout from '@/portfolio/_data/array-workout-data';
import natours from '@/portfolio/_data/natours-data';

import PageHeading from '@/_components/text/PageHeading';
import PageWrapper from '@/_components/containers/PageWrapper';
import ProjectCards from '@/_components/projects/ProjectCards';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  const projects = [
    morningstar,
    portfolioTemplate,
    firstPortfolio,
    natours,
    arrayWorkout,
  ];

  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <ProjectCards>
          {projects.map((project, i) => (
            <div key={project.id} className='flex-center flex-col gap-4 w-full'>
              <ProjectCard project={project} />
              {i !== projects.length - 1 && <DividerHorizontal />}
            </div>
          ))}
        </ProjectCards>
      </div>
    </PageWrapper>
  );
}

export default Page;
