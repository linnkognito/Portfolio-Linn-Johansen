import portfolioTemplate from '@/portfolio/portfolio-template/portfolio-template-data';

import PageHeading from '@/_components/PageHeading';
import PageWrapper from '@/_components/PageWrapper';
import ProjectCards from '@/_components/projects/ProjectCards';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  const projects = [portfolioTemplate];

  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <ProjectCards>
          {projects.map((project, i) => (
            <>
              <ProjectCard key={project.id} project={project} />
              {i !== projects.length - 1 && <DividerHorizontal />}
            </>
          ))}
        </ProjectCards>
      </div>
    </PageWrapper>
  );
}

export default Page;
