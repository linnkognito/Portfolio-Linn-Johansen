import DividerHorizontal from '../dividers/DividerHorizontal';
import SectionHeading from '../SectionHeading';
import ProjectCardDescription from './ProjectCardDescription';
// import ModernPortfolioButton from './showcase/ModernPortfolioButton';

function ProjectUiUx({ children, title = 'UI/UX', UiDemo, project = null }) {
  if (!project) return null;

  return (
    <div className='flex gap-10 w-full'>
      <div className='flex flex-col gap-4 w-1/3 bg-bgr/80 border border-pri/30 rounded-xs shadow-xl shadow-sdw/30'>
        {/* <ModernPortfolioButton className='w-full text-xl'>
          Small
        </ModernPortfolioButton>
        <ModernPortfolioButton className='w-full text-2xl'>
          Medium
        </ModernPortfolioButton>
        <ModernPortfolioButton className='w-full text-3xl'>
          Large
        </ModernPortfolioButton> */}
        {UiDemo}
      </div>

      <div className='flex-center flex-col w-2/3'>
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
