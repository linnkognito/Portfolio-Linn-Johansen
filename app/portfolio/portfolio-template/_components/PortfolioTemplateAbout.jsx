import {
  ReactLink,
  SanityLink,
  TailwindLink,
} from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function PortfolioTemplateAbout() {
  return (
    <>
      <p>
        <Bold>Single-page</Bold> template intended to showcase what a custom
        creative portfolio built by me could potentially look like.
      </p>
      <p>
        Built with <ReactLink /> & <TailwindLink />, this website scales nicely
        from mobile devices up to large screens.
      </p>
      <p>
        The text & image content of this site is easily added & updated through{' '}
        <SanityLink /> (headless CMS).
      </p>
    </>
  );
}

export default PortfolioTemplateAbout;
