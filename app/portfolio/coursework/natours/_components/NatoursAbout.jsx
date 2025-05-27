import { Bold } from '@/_components/text/TextStyles';
import { PostmanLink } from '@/_components/technologies/TechTextLinks';
import TextLink from '@/_components/text/TextLink';

function NatoursAbout() {
  return (
    <>
      <p>
        <Bold>Natours</Bold> is the final and most extensive project from Jonas
        Schmedtmann's{' '}
        <TextLink
          href='https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=KEEPLEARNING'
          aria-label='Link to course Udemy page'
        >
          Node.js course
        </TextLink>
        .
      </p>
      <p>
        It introduced me to key backend concepts like{' '}
        <Bold>authentication, access control,</Bold> and{' '}
        <Bold>data modeling</Bold>. The app also features{' '}
        <Bold>server-side rendering</Bold>.
      </p>
      <p>
        Adapting to outdated libraries and breaking changes was a valuable
        learning experience. This, along with <Bold>API testing</Bold> and
        debugging using <PostmanLink />, sharpened my <Bold>debugging</Bold> and{' '}
        <Bold>problem-solving</Bold> skills.
      </p>
    </>
  );
}

export default NatoursAbout;
