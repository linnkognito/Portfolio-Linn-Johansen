import portfolioTemplate from '@/portfolio/_data/portfolio-template-data';
import morningstar from '@/portfolio/_data/morningstar-data';
import firstPortfolio from '@/portfolio/_data/first-portfolio-data';
import natours from '@/portfolio/_data/natours-data';
import moodTracking from '@/portfolio/_data/mood-tracking-data';
import a11y from '@/portfolio/_data/a11y-data';
// import theWildOasis from '@/portfolio/_data/the-wild-oasis-website-data';

import PageHeading from '@/_components/text/PageHeading';
import PageWrapper from '@/_components/containers/PageWrapper';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  const projects = [
    moodTracking,
    a11y,
    morningstar,
    portfolioTemplate,
    firstPortfolio,
    natours,
    // theWildOasis,
  ];

  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <div
          className='flex-center gap-4 flex-col w-full h-full'
          role='list'
          aria-label='Project cards'
        >
          {projects.map((project, i) => (
            <div key={project.id} className='flex-center flex-col gap-4 w-full'>
              <ProjectCard project={project} />
              {i !== projects.length - 1 && <DividerHorizontal />}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Page;
