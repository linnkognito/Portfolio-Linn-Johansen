import { TailwindLink } from '@/_components/technologies/TechTextLinks';
import TextLink from '@/_components/text/TextLink';
import { Bold } from '@/_components/text/TextStyles';

function MoodTrackingUiUx() {
  return (
    <div className='space-y-4'>
      <p>
        The UI, designed by dev{' '}
        <TextLink href='https://github.com/Cam96stanley'>Cameron</TextLink> from
        a detailed Figma design, is pixel-perfect and responsive across
        breakpoints.
      </p>
      <p>
        The layout includes a dashboard, modal flows, and form interactions, all
        made with <Bold>accessible, semantic HTML</Bold> and responsive{' '}
        <TailwindLink /> utilities. Components are cleanly structured and
        reusable, making collaboration with a separate backend smooth and
        scalable.
      </p>
    </div>
  );
}

export default MoodTrackingUiUx;
