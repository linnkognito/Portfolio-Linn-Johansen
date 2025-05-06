import { Github } from '@react-symbols/icons';
import PageWrapper from '@/_components/PageWrapper';
import PageHeading from '@/_components/PageHeading';
import Image from 'next/image';
import ProjectSection from '@/_components/projects/ProjectSection';
import ContainerPill from '@/_components/ContainerPill';
import TechIcon from '@/_components/TechIcon';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import HeroButtons from '@/_components/hero/HeroButtons';
import DividerVertical from '@/_components/dividers/DividerVertical';

function Page() {
  return (
    <PageWrapper aria-labelledby='about-heading'>
      <article className='flex gap-20 w-full p-section py-12 text-justify bg-bgr/50 backdrop-blur-sm border border-pri/30 shadow-md shadow-sdw/50 rounded-xs'>
        {/* Heading & Profile */}
        <section className='flex-center flex-col gap-6 w-full max-w-2/3 h-full pl-10'>
          <PageHeading id='about-heading' border={false}>
            About
          </PageHeading>
          <DividerHorizontal margin='m-0' />

          {/* <ProjectSection> */}
          <div className='flex flex-col gap-4 py-4 px-10'>
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

          <HeroButtons />
        </section>

        {/* Image & Socials */}
        <ProjectSection
          theme='framedSmall'
          className='flex-col justify-start w-fit max-w-1/3'
        >
          <div
            role='img'
            className='relative w-[80%] aspect-square my-2 rounded-full overflow-hidden shadow-xl shadow-sdw/20'
          >
            <Image
              src='/pp-line.jpg'
              alt='Profile picture of Linn Johansen'
              fill
              className='object-cover object-center'
            />
          </div>

          <DividerHorizontal margin='mt-2 mb-1' />
          <ul></ul>

          <ul className='flex flex-col gap-2 pt-2 pb-4'>
            <li>
              <ContainerPill
                theme='pop'
                width='w-full'
                className='group gap-2 justify-start cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
              >
                <TechIcon icon={<Github />} />
                <p className='group-hover:font-semibold group-hover:[text-shadow:0_0_7px_var(--color-txt)]'>
                  GitHub
                </p>
              </ContainerPill>
            </li>

            <li>
              <ContainerPill
                theme='pop'
                width='w-full'
                className='group gap-2 justify-start cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
              >
                <TechIcon>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='max-w-full p-[2px]'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                  </svg>
                </TechIcon>

                <p className='group-hover:font-semibold group-hover:[text-shadow:0_0_7px_var(--color-txt)]'>
                  LinkedIn
                </p>
              </ContainerPill>
            </li>
          </ul>
        </ProjectSection>
      </article>
      <DividerHorizontal margin='m-0' />
    </PageWrapper>
  );
}

export default Page;
