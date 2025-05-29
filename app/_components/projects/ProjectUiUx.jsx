import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import SectionHeading from '@/_components/text/SectionHeading';
import ProjectCardDescription from '@/_components/projects/ProjectCardDescription';

function ProjectUiUx({ children, title = 'UI/UX', UiDemo, project = null }) {
  if (!project) return null;

  return (
    <div className='flex-center max-md:flex-col gap-10 w-full min-w-8/10'>
      <div className='flex flex-col gap-4 w-full md:w-1/3 h-full max-h-full bg-bgr/80 border border-pri/30 rounded-xs shadow-xl shadow-sdw/30'>
        {UiDemo}
      </div>

      <div className='flex-center flex-col w-full md:w-2/3'>
        <div className='self-start flex gap-6 w-2/3 mb-2'>
          <SectionHeading stylized={true}>{title}</SectionHeading>
        </div>

        <ProjectCardDescription>{children}</ProjectCardDescription>

        <DividerHorizontal width='w-2/3' margin='mt-6' className='self-end' />
      </div>
    </div>
  );
}

export default ProjectUiUx;

{
}
