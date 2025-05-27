import {
  ExpressLink,
  MongoDBLink,
  MongooseLink,
  PostmanLink,
} from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';
import InfoCard from '@/_components/containers/InfoCard';
import TextLink from '@/_components/text/TextLink';

function NatoursFeatures() {
  return (
    <>
      <InfoCard title='Backend architecture'>
        <p className='text-justify'>
          Built using <ExpressLink />, <MongoDBLink />, and <MongooseLink />,
          this project features a structured, <Bold>RESTful API</Bold> with
          secure <Bold>JWT authentication</Bold>,{' '}
          <Bold>role-based access control</Bold> and advanced{' '}
          <Bold>error handling</Bold>.
        </p>
      </InfoCard>
      <InfoCard title='Tooling'>
        <p className='text-justify'>
          Natours includes a simulated <Bold>payment system</Bold> via{' '}
          <TextLink
            href='https://stripe.com/'
            aria-label={`Link to Stripe's website`}
          >
            Stripe
          </TextLink>{' '}
          and integrated <Bold>email functionality</Bold> using{' '}
          <TextLink
            href='https://www.brevo.com/'
            aria-label={`Link to Brevo's website`}
          >
            Brevo
          </TextLink>
          . I also used <PostmanLink /> to test API endpoints throughout
          development.
        </p>
      </InfoCard>
      <InfoCard title='Security'>
        <p className='text-justify'>
          I implemented backend security features using{' '}
          <TextLink
            href='https://www.npmjs.com/package/helmet'
            aria-label={`Link to Helmet's package page`}
          >
            Helmet
          </TextLink>
          , <Bold>rate limiting</Bold>, <Bold>data sanitization</Bold>, and{' '}
          <Bold>XSS protection</Bold>. This project helped me build a strong
          foundation in writing <Bold>secure, production-ready APIs</Bold> with{' '}
          <ExpressLink />.
        </p>
      </InfoCard>
    </>
  );
}

export default NatoursFeatures;
