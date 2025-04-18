import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';
import Image from 'next/image';
import DividerHorizontal from '@/app/_components/DividerHorizontal';
import TechIcon from '@/app/_components/TechIcon';
import TechIcons from '@/app/_components/TechIcons';
import ProjectCardDescription from '@/app/_portfolio/project-card-1/ProjectCardDescription';
import ModernPortfolioButton from '@/app/_showcase-components/ModernPortfolioButton';
import DividerVertical from '@/app/_components/DividerVertical';
import ProjectCardImage from '@/app/_portfolio/project-card-1/ProjectCardImage';

function Page({ title = 'Example project' }) {
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
          <div className='flex-center h-fit mt-10 rounded-full bg-pri/10 border border-pri/20'>
            <TechIcons direction='col'>
              <TechIcon title='Sanity' width='w-8' icon={<Sanity />} />
              <TechIcon title='React.js' width='w-8' icon={<Reactjs />} />
              <TechIcon title='Tailwind CSS' width='w-8' icon={<Tailwind />} />
            </TechIcons>
          </div>

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

        <section className='flex-center gap-10 bg-sec/10 p-div rounded-xs border border-pri/30'>
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
        <section className='flex gap-10 w-full px-10'>
          <div className='flex flex-col gap-4 w-1/3 p-section bg-bgr/50 border border-pri/20 rounded-xs'>
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
                className='text-heading text-pri tshadow-txt text-lg font-semibold tracking-[0.75em] uppercase'
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
        <DividerHorizontal margin='m-0' />
        {/* -------------------------------------------------- */}

        <section className='flex-center gap-10 w-full h-fit p-section rounded-xs bg-sec/10 border border-pri/30'>
          <div className='flex flex-col gap-4 w-full max-w-3/5 p-section'>
            <h2
              className='pl-4 text-heading text-acc tshadow-acc text-xl font-semibold tracking-[0.75em] uppercase'
              id='project-name'
            >
              Features
            </h2>
            <DividerHorizontal className='max-w-4/5' />
            <ProjectCardDescription
              padding='p-0'
              width='w-full'
              expand={false}
            />
          </div>

          <div className='relative w-1/3 h-full'>
            <div className='absolute bottom-40 w-full h-full'>
              <ProjectCardImage src='/rick-rothenberg.jpg' />
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default Page;
