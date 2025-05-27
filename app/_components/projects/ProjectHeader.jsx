import ActionIcons from '../buttons/ActionIcons';
import PageHeading from '../text/PageHeading';

function ProjectHeader({ project }) {
  if (!project) return null;

  const { title, links } = project;

  return (
    <div className='flex-center w-full max-w-fit border-b border-pri/30'>
      <PageHeading border={false} id='portfolio-heading'>
        {title}
      </PageHeading>

      <ActionIcons links={links} />
    </div>
  );
}

export default ProjectHeader;
