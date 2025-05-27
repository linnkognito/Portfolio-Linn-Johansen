import InfoCard from '@/_components/containers/InfoCard';
import {
  ExpressLink,
  MongoDBLink,
  ReactRouterLink,
  ReduxToolkitLink,
} from '@/_components/technologies/TechTextLinks';

function MorningstarFeatures() {
  return (
    <>
      <InfoCard title='Dynamic Routing'>
        <p className='text-justify'>
          Built with <ReactRouterLink />, the app uses nested routes and dynamic
          URL parameters to handle product categories and item detail pages -
          just like a real online store. This prevents full page reloads in
          order to create a seamless user experience.
        </p>
      </InfoCard>
      <InfoCard title='State Management'>
        <p className='text-justify'>
          I knew I wanted to keep product and cart logic centralized. For this I
          used <ReduxToolkitLink /> to manage global state for products, the
          cart, filters, and UI controls. Async logic (like API fetching) is
          handled with thunks.
        </p>
      </InfoCard>
      <InfoCard title='Custom API'>
        <p className='text-justify'>
          Powered by <ExpressLink /> and <MongoDBLink />, I built a custom REST
          API to serve product data. The API supports filtering, querying by
          category or type, and is designed to mirror the structure of a
          real-world backend.
        </p>
      </InfoCard>
    </>
  );
}

export default MorningstarFeatures;
