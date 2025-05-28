import PageWrapper from '@/_components/containers/PageWrapper';
import AboutIntroSection from '@/_components/about/AboutIntroSection';

function Page() {
  return (
    <PageWrapper aria-labelledby='about-heading'>
      <article className='flex gap-20 w-full p-section py-12 text-justify bg-bgr/50 backdrop-blur-sm border border-pri/30 shadow-md shadow-sdw/50 rounded-xs'>
        <AboutIntroSection />
      </article>
    </PageWrapper>
  );
}

export default Page;
