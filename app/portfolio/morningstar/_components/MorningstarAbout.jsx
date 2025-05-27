import {
  ExpressLink,
  MongoDBLink,
} from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function MorningstarAbout() {
  return (
    <>
      <p>
        Morningstar is a fully responsive{' '}
        <Bold>e-commerce web application</Bold>
        designed and developed by me to practice{' '}
        <Bold>fullstack development</Bold> and hone my <Bold>UI design</Bold>{' '}
        skills with a retail focus.
      </p>
      <p>
        The app showcases a fake online clothing store and pulls product data
        from a custom-built{' '}
        <Bold>
          <ExpressLink /> + <MongoDBLink /> API
        </Bold>
        .
      </p>
      <p>
        My goal was to simulate something akin to a <Bold>real-world</Bold> dev
        environment, from building an API and handling dynamic product{' '}
        <Bold>filtering</Bold> to styling modern,{' '}
        <Bold>responsive layouts</Bold> that feel like an actual storefront.
      </p>
    </>
  );
}

export default MorningstarAbout;
