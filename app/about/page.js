import PageWrapper from '@/_components/containers/PageWrapper';
import AboutSectionIntro from '../_components/about/AboutSectionIntro';
import AboutSectionResume from '../_components/about/AboutSectionResume';

function Page() {
  return (
    <PageWrapper aria-labelledby='about-heading'>
      <article className='flex flex-col gap-10 w-full px-6'>
        <AboutSectionIntro />
        {/* <AboutSectionResume /> */}
      </article>
    </PageWrapper>
  );
}

export default Page;
