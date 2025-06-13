import { FigmaLink } from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function A11yAbout() {
  return (
    <>
      <p>
        <Bold>Design system</Bold> created to visually support my accessibility
        audit gig on Fiverr.
      </p>
      <p>
        Built in <FigmaLink />, the design uses bold colors, playful shapes, and
        clear structure to explain accessibility principles in a friendly,
        eye-catching way.
      </p>
      <p>
        Each element—icons, logos, layouts—was crafted to feel inclusive while
        supporting readability, contrast, and semantic clarity.
      </p>
    </>
  );
}

export default A11yAbout;
