import InfoCard from '@/_components/containers/InfoCard';
import {
  ReactLink,
  SanityLink,
  TailwindLink,
  ViteLink,
} from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function PortfolioTemplateFeatures() {
  return (
    <>
      <InfoCard title='CMS-powered'>
        <p className='text-justify'>
          My use of custom <SanityLink /> schemas makes content management{' '}
          <Bold>easy and code-free</Bold>, so visual artists and developers can
          update the site without touching a single line of code.
        </p>
      </InfoCard>
      <InfoCard title='Monorepo Structure'>
        <p className='text-justify'>
          This project is structured as a <Bold>monorepo</Bold>, separating the
          frontend and CMS studio into distinct packages. I wanted to keep
          development <Bold>organized and</Bold> modular and have a clean
          separation of concerns.
        </p>
      </InfoCard>
      <InfoCard title='Modern & Performant'>
        <p className='text-justify'>
          Built with <ViteLink />, <ReactLink>React 19</ReactLink>, and{' '}
          <TailwindLink>Tailwind CSS v4</TailwindLink> for fast dev builds and
          excellent runtime performance. The setup is lightweight, responsive,
          and <Bold>future-proof</Bold> — ready for scalable deployment.
        </p>
      </InfoCard>
    </>
  );
}

export default PortfolioTemplateFeatures;
