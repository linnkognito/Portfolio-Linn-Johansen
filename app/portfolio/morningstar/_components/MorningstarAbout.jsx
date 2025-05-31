import {
  ExpressLink,
  MongoDBLink,
} from '@/_components/technologies/TechTextLinks';
import { Bold } from '@/_components/text/TextStyles';

function MorningstarAbout() {
  return (
    <>
      <p>
        Morningstar is a fully responsive <Bold>e-commerce web app</Bold> built
        to sharpen my skills in <Bold>UI design</Bold> and{' '}
        <Bold>fullstack development</Bold>.
      </p>
      <p>
        The app showcases a fake online clothing store, and pulls product data
        from a custom-built{' '}
        <Bold>
          <ExpressLink /> + <MongoDBLink /> API
        </Bold>
        .
      </p>
      <p>
        My goal was to simulate something akin to a <Bold>real-world</Bold> dev
        environment: from building an API and handling{' '}
        <Bold>dynamic product filtering</Bold>, to crafting a layout that is
        both expressive and <Bold>responsive</Bold>.
      </p>
    </>
  );
}

export default MorningstarAbout;
