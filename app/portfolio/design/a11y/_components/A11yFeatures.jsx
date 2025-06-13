import InfoCard from '@/_components/containers/InfoCard';
import { FigmaLink } from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function A11yFeatures() {
  return (
    <>
      <InfoCard title='Inclusive by Design'>
        <p className='text-justify'>
          This project is built to embody accessibility — not just talk about
          it. From <Bold>color contrast</Bold> to iconography, every visual
          choice supports clarity and inclusivity.
        </p>
      </InfoCard>

      <InfoCard title='Customized'>
        <p className='text-justify'>
          I designed a unique visual language in <FigmaLink />, using
          color-coded categories (vision, hearing, mobility, cognitive) and a
          bold, friendly style to represent accessibility without feeling
          clinical.
        </p>
      </InfoCard>

      <InfoCard title='Made for clients'>
        <p className='text-justify'>
          These designs were created to make my Fiverr gig feel
          <Bold>approachable, modern, and clear</Bold> — bridging the gap
          between technical audits and visual storytelling.
        </p>
      </InfoCard>
    </>
  );
}

export default A11yFeatures;
