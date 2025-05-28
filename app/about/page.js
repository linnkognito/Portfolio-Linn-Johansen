import PageWrapper from '@/_components/containers/PageWrapper';
import PageHeading from '@/_components/text/PageHeading';
import Image from 'next/image';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContainerPill from '@/_components/containers/ContainerPill';
import ActionButtons from '@/_components/buttons/ActionButtons';

function Page() {
  return (
    <PageWrapper aria-labelledby='about-heading'>
      <article className='flex gap-20 w-full p-section py-12 text-justify bg-bgr/50 backdrop-blur-sm border border-pri/30 shadow-md shadow-sdw/50 rounded-xs'>
        {/* Heading & Profile */}
        <section className='flex-center flex-col gap-6 w-full max-w-6/10 h-full mx-auto max-md:mx-0 p-section md:pl-10'>
          <PageHeading id='about-heading' border={false}>
            About
          </PageHeading>
          <DividerHorizontal margin='m-0' />

          {/* <ProjectSection> */}
          <div className='flex items-center flex-col gap-4 w-full py-4 px-10 text-justify'>
            <p>
              Hi! I’m an aspiring web developer — or maybe more accurately, a
              design-dev hybrid — based in{' '}
              <span className='font-semibold'>Portland, OR</span>.
            </p>
            <p>
              Since March 2024, I’ve been deep in the world of JavaScript,
              React, and modern frontend development through self-guided
              learning and hands-on projects. I love building clean, functional,
              and user-focused interfaces — and I’m not afraid to go full-stack
              when the project calls for it.
            </p>
            <p>
              Before dev life, I spent nearly a decade in visual merchandising —
              planning, styling, and collaborating with tight-knit teams. These
              days, I bring that same creative eye and project-driven mindset
              into every line of code.
            </p>
          </div>

          <DividerHorizontal />

          <ContainerPill
            theme='borderPopDark'
            width='w-fit'
            className='shadow-md shadow-bgr/50'
          >
            <ActionButtons
              buttonCTA={{
                label: 'Resume',
                href: '/files/resume-linnjohansen.pdf',
              }}
              aria-label='Portfolio project action buttons'
              className='pl-1'
            />
          </ContainerPill>
        </section>

        <section className='hidden w-full max-w-1/3 h-full my-4 mr-4 pl-10'>
          <div
            role='img'
            className='relative w-[80%] h-[80%] aspect-square rounded-full overflow-hidden shadow-xl shadow-acc/20 '
          >
            <Image
              src='/pp-line.jpg'
              alt='Profile picture of Linn Johansen'
              fill
              className='object-cover object-center brightness-80'
            />
          </div>
        </section>
      </article>
      <DividerHorizontal margin='m-0' />
    </PageWrapper>
  );
}

export default Page;
