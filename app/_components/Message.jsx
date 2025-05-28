import PageWrapper from '@/_components/containers/PageWrapper';
import PageHeading from '@/_components/text/PageHeading';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContainerPill from '@/_components/containers/ContainerPill';
import BackButton from './buttons/BackButton';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import SectionHeading from './text/SectionHeading';

function Message({ children, title }) {
  return (
    <PageWrapper aria-labelledby='message-heading'>
      <article className='flex-center flex-col w-full p-section py-12 text-justify bg-bgr/85 backdrop-blur-sm border border-pri/30 shadow-md shadow-sdw/50 rounded-xs'>
        <section className='flex-center flex-col gap-6 w-full max-w-8/10'>
          <SectionHeading
            id='message-heading'
            size='xlDynamic'
            color='pop'
            border={false}
          >
            {title}
          </SectionHeading>

          <DividerHorizontal margin='m-0' />

          <div className='flex items-center flex-col gap-4 w-full py-4 px-10 text-base md:text-lg text-justify'>
            {children}
          </div>

          <DividerHorizontal />

          <BackButton />
        </section>
      </article>
    </PageWrapper>
  );
}

export default Message;
