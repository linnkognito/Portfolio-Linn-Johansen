import PageHeading from '@/_components/PageHeading';
import PageWrapper from '@/_components/PageWrapper';
import ProjectCards from '@/_components/projects/ProjectCards';
import ProjectCard from '@/_components/projects/ProjectCard';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  const projects = [
    {
      title: 'Portfolio template',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      path: 'portfolio/p',
      image: { src: '/simon-lee-david.jpg' },
    },
  ];
  return (
    <PageWrapper aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>Projects</PageHeading>

      <div className='p-section'>
        <ProjectCards>
          {projects.map((project, i) => (
            <>
              <ProjectCard project={project} />
              {i !== projects.length - 1 && <DividerHorizontal />}
            </>
          ))}
        </ProjectCards>
      </div>
    </PageWrapper>
  );
}

export default Page;
