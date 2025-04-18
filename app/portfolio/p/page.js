import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';
import Image from 'next/image';
import DividerHorizontal from '@_components/DividerHorizontal';
import TechIcon from '@_components/TechIcon';
import TechIcons from '@_components/TechIcons';
import ProjectCardDescription from '@_portfolio/project-card-1/ProjectCardDescription';
import ModernPortfolioButton from '@_showcase-components/ModernPortfolioButton';
import ProjectCardImage from '@/_projects/ProjectCardImage';
import ContainerPill from '@/_components/ContainerPill';
import ProjectFeatures from '@/_projects/ProjectFeatures';
import InfoCard from '@/_components/InfoCard';
import ProjectCardActionButtons from '@/_portfolio/ProjectCardActionButtons';

function Page({ title = 'Example project' }) {
  const projectFeatures = [
    { label: 'Global state', value: 'Redux Toolkit' },
    { label: 'Headless CMS', value: 'Sanity.io' },
    { label: 'Routing', value: 'React Router' },
    { label: 'Styling', value: 'Tailwind CSS' },
  ];

  return (
    <section
      className='w-full min-h-fit p-section bg-pri/5 backdrop-blur-lg rounded-xs'
      aria-labelledby='portfolio-heading'
    >
      <h1
        id='portfolio-heading'
        className='max-w-full sm:max-w-4/5 pb-4 px-12 mx-4 sm:mx-auto text-xl sm:text-2xl text-center text-heading text-pri font-semibold tracking-[0.9em] tshadow-glow border-b border-pri/30 uppercase'
      >
        {title}
      </h1>

      <article className='flex flex-col gap-10 p-section'>
        <section className='flex gap-6 pl-8 pr-4'>
          <ContainerPill className='mt-10'>
            <TechIcons direction='col'>
              <TechIcon title='Sanity' width='w-8' icon={<Sanity />} />
              <TechIcon title='React.js' width='w-8' icon={<Reactjs />} />
              <TechIcon title='Tailwind CSS' width='w-8' icon={<Tailwind />} />
            </TechIcons>
          </ContainerPill>

          {/* <div className='relative w-full max-w-3/4 aspect-[16/9] border border-pri/50 rounded-xs shadow shadow-pri/50'> */}
          <div className='relative w-full max-w-3/4 aspect-[16/9] border border-bgr/10 rounded-xs shadow-xl shadow-bgr'>
            <Image
              src='/simon-lee-david.jpg'
              alt=''
              fill
              className='object-cover object-center rounded-xs'
            />
          </div>
        </section>

        {/* -------------------------------------------------- */}

        <section className='flex-center gap-10 bg-sec/10 p-div rounded-xs border border-pri/30  shadow-xl shadow-bgr/30'>
          <div className='flex-center flex-col gap-4 w-full max-w-1/2 p-div'>
            <h2
              className='text-heading text-acc tshadow-acc text-xl font-semibold tracking-[0.75em] uppercase'
              id='project-name'
            >
              About
            </h2>
            <DividerHorizontal margin='m-0' width='w-full max-w-4/5' />
            <ProjectCardDescription width='w-full' padding='' expand={false} />
          </div>

          <div className='relative w-full max-w-1/2 aspect-[16/9] shadow-lg shadow-bgr rounded-xs'>
            <Image
              src='/creativeportfolio-mockup.png'
              alt=''
              fill
              className='object-cover object-center rounded-xs'
            />
          </div>
        </section>

        {/* -------------------------------------------------- */}

        {/* UI Showcase */}
        <section className='flex gap-10 w-full px-10 my-10'>
          <div className='flex flex-col gap-4 w-1/3 p-section bg-bgr/80 border border-pri/30 rounded-xs shadow-xl shadow-sdw/30'>
            <ModernPortfolioButton className='w-full text-xl'>
              Small
            </ModernPortfolioButton>
            <ModernPortfolioButton className='w-full text-2xl'>
              Medium
            </ModernPortfolioButton>
            <ModernPortfolioButton className='w-full text-3xl'>
              Large
            </ModernPortfolioButton>
          </div>

          <div className='flex-center flex-col w-2/3'>
            <div className='self-start flex gap-6 w-2/3'>
              <DividerHorizontal width='w-full' margin='mb-3' className='' />
              <h2
                className='text-heading text-txt tshadow-txt text-lg font-semibold tracking-[0.75em] uppercase'
                id='project-name'
              >
                Ui/UX
              </h2>
            </div>

            <ProjectCardDescription expand={false} />

            <DividerHorizontal
              width='w-2/3'
              margin='mt-6'
              className='self-end'
            />
          </div>
        </section>

        {/* -------------------------------------------------- */}

        <section className='flex-center gap-10 w-full h-fit p-section rounded-xs bg-sec/10 border border-pri/30 shadow-xl shadow-bgr/30'>
          <div className='flex flex-col gap-4 w-full max-w-3/5 p-section'>
            <h2
              className='pl-4 text-heading text-acc tshadow-acc text-xl font-semibold tracking-[0.75em] uppercase'
              id='project-name'
            >
              Features
            </h2>
            <DividerHorizontal className='max-w-4/5' />
            <ProjectCardDescription expand={false} />
            <ContainerPill theme='dark' className='ml-4'>
              <ProjectCardActionButtons
                buttonCTA='Live'
                buttonIcon='Code'
                className='mx-auto pl-4'
              />
            </ContainerPill>
          </div>

          <div className='relative w-1/3 h-full'>
            <div className='absolute bottom-40 w-full h-full'>
              <ProjectCardImage src='/rick-rothenberg.jpg' />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- */}

        <section className='flex gap-8 w-full px-10 mt-15'>
          <InfoCard title='Card 1'>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </InfoCard>
          <InfoCard title='Card 2'>
            <p className='text-justify'>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </InfoCard>
          <InfoCard title='Card 3'>
            <p className='text-justify'>
              Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </InfoCard>
        </section>
      </article>
    </section>
  );
}

export default Page;
