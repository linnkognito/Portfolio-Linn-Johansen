import { FontColor } from '@/_components/text/TextStyles';
import TextLink from '@/_components/text/TextLink';

function MoodTrackingAbout() {
  return (
    <>
      <p>
        Mood Tracking is a full-stack web app built in collaboration with
        backend developer{' '}
        <TextLink href='https://github.com/Cam96stanley'>Cameron</TextLink>. The
        app lets users track their mood, feelings, and sleep habits, and
        displays the data in a clear, friendly dashboard.
      </p>
      <p>
        For this project, I’m responsible for building the entire frontend based
        on a detailed Figma design. That means translating mockups into
        responsive, accessible components using Next.js and Tailwind CSS, while
        staying pixel-precise and UI-consistent across different screen sizes.
      </p>
      <p>
        <FontColor theme='pop' className='font-bold'>
          I'm currently in the middle of working on this project{' '}
        </FontColor>
        — live version coming soon! In the meantime, you can check out the code
        on GitHub.
      </p>
    </>
  );
}

export default MoodTrackingAbout;
