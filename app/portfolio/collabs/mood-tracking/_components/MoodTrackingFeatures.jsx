import InfoCard from '@/_components/containers/InfoCard';
import { Bold } from '@/_components/text/TextStyles';
import { TailwindLink } from '@/_components/technologies/TechTextLinks';

function MoodTrackingFeatures() {
  return (
    <>
      <InfoCard title='Figma-to-Code'>
        <p className='text-justify'>
          This project has been a deep dive into <Bold>precision coding</Bold> —
          matching the Figma mockups exactly when it comes to spacing, font
          sizing, visual alignment, and consistent component structure. It’s
          helped me sharpen my attention to detail across both layout and
          behavior.
        </p>
      </InfoCard>

      <InfoCard title='Accessible'>
        <p className='text-justify'>
          From form modals to dashboard cards, every interactive element is
          built with <Bold>semantic HTML</Bold> and designed to be keyboard and
          screen reader accessible. Focus states, button structure, and flow
          logic follow <Bold>a11y-first principles</Bold> from the start.
        </p>
      </InfoCard>

      <InfoCard title='Clean'>
        <p className='text-justify'>
          Since I’m collaborating with a backend developer, I’ve kept the
          frontend
          <Bold> modular and maintainable</Bold>. Pages and components are
          organized for clear separation of concerns, and styling is handled
          entirely with <TailwindLink /> to keep the codebase lean and scalable.
        </p>
      </InfoCard>
    </>
  );
}

export default MoodTrackingFeatures;
