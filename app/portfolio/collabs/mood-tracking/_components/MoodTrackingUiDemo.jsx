import ProjectUiDemo from '@/_components/projects/ProjectUiDemo';
import Image from 'next/image';

function MoodTrackingUiDemo() {
  return (
    <ProjectUiDemo image={true}>
      <Image
        src='/mood-tracking-ui-2.png'
        fill
        alt='Component UI for Log Mood screen of project: Mood Tracking, from Figma Design'
        className='object-center object-cover border border-pop rounded-xs'
      />
    </ProjectUiDemo>
  );
}

export default MoodTrackingUiDemo;
