import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';
import ProjectCardHeader from '@/app/_portfolio/project-card-1/ProjectCardHeader';
import TechIcons from '@/app/_components/TechIcons';
import TechIcon from '@/app/_components/TechIcon';
import DividerHorizontal from '@/app/_components/DividerHorizontal';
import ProjectCardDescription from '@/app/_portfolio/project-card-1/ProjectCardDescription';

function ProjectCardText({ children, position = 'middle' }) {
  const styles = {
    first: 'rounded-tr-full',
    middle: 'rounded-xs',
    last: 'rounded-br-full',
  };

  return (
    <div
      className={`w-full min-w-[574px] p-div bg-sec/10 backdrop-blur-lg border border-pri/50 ${styles[position]} overflow-hidden`}
      role='contentinfo'
    >
      <ProjectCardHeader heading='Digital art portfolio'>
        <TechIcons>
          <TechIcon title='Sanity' icon={<Sanity />} />
          <TechIcon title='React.js' icon={<Reactjs />} />
          <TechIcon title='Tailwind CSS' icon={<Tailwind />} />
        </TechIcons>
      </ProjectCardHeader>

      <DividerHorizontal />

      <ProjectCardDescription width='w-full' />

      {children}
    </div>
  );
}

export default ProjectCardText;
