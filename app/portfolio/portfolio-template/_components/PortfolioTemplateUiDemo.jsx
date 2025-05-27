import ProjectUiDemo from '@/_components/projects/ProjectUiDemo';
import PortfolioTemplateButton from './PortfolioTemplateButton';

function PortfolioTemplateUiDemo() {
  return (
    <ProjectUiDemo className='flex flex-col gap-4 w-full min-w-fit'>
      <PortfolioTemplateButton className='w-full text-xl'>
        Small
      </PortfolioTemplateButton>
      <PortfolioTemplateButton className='w-full text-2xl'>
        Medium
      </PortfolioTemplateButton>
      <PortfolioTemplateButton className='w-full text-3xl'>
        Large
      </PortfolioTemplateButton>
    </ProjectUiDemo>
  );
}

export default PortfolioTemplateUiDemo;
