import PageHeading from '@/_components/text/PageHeading';
import ContactInfo from '@/_components/connect/ContactInfo';

function Page() {
  return (
    <article
      aria-labelledby='contact-heading'
      className='flex-center flex-col w-full min-w-fit p-section bg-bgr/50 backdrop-blur-sm border border-pri/30'
    >
      <PageHeading id='contact-heading'>Contact</PageHeading>

      <ContactInfo />
    </article>
  );
}

export default Page;
