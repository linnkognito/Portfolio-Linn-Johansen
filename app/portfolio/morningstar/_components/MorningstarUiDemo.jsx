import ProjectUiDemo from '@/_components/projects/ProjectUiDemo';
import Image from 'next/image';

function MorningstarUiDemo() {
  return (
    <ProjectUiDemo image={true}>
      <Image
        src='/morningstar-small-nav.png'
        fill
        alt='Home page for small screens with dropdown navigation menu visible'
        className='object-center object-cover border border-pop rounded-xs'
      />
    </ProjectUiDemo>
  );
}

export default MorningstarUiDemo;
