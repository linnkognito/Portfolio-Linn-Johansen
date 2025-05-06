import PageHeading from '@/_components/PageHeading';
import PageWrapper from '@/_components/PageWrapper';
import ProjectCards from '@/_components/projects/ProjectCards';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
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
    </PageWrapper>
  );
}

export default Page;
