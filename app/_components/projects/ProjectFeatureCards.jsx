import InfoCard from '../InfoCard';
import TextLink from '../TextLink';

function ProjectFeatureCards() {
  return (
    <>
      <InfoCard title='Sanity'>
        <p className='text-justify'>
          This template uses{' '}
          <TextLink href='https://www.sanity.io/'>Sanity</TextLink> as a
          headless CMS. I customized the schemas myself, which was a great
          opportunity to revisit backend-related development.
        </p>
      </InfoCard>
      <InfoCard title='Card 2'>
        <p className='text-justify'>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </InfoCard>
      <InfoCard title='Card 3'>
        <p className='text-justify'>
          Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
      </InfoCard>
    </>
  );
}

export default ProjectFeatureCards;
