import Image from 'next/image';
import ButtonCTA from '@/app/_components/ButtonCTA';
import TechIcon from '@/app/_components/TechIcon';
import { Reactjs, Sanity, Tailwind } from '@react-symbols/icons';

function ProjectCard1() {
  return (
    <div className='flex flex-col gap-4 w-fit p-div min-h-[50vh] bg-bgr/50 border border-pri/50 rounded-xs'>
      {/* Tech */}
      <div className='flex gap-4 w-full max-w-[400px] ml-[216px] px-4 py-1 bg-sec/10 backdrop-blur-lg border border-pri/50'>
        <TechIcon title='Sanity'>
          <Sanity />
        </TechIcon>
        <TechIcon title='React.js'>
          <Reactjs />
        </TechIcon>
        <TechIcon title='Tailwind CSS'>
          <Tailwind />
        </TechIcon>
      </div>

      {/* Row 1 */}
      <div className='flex gap-4 h-[200px]'>
        {/* Row 1: Image */}
        <div className='relative aspect-square max-h-full rounded-full shadow-sm shadow-sec'>
          <Image
            src='/simon-lee-david.jpg'
            alt='David'
            fill
            className='object-cover object-left rounded-full'
          />
        </div>

        {/* Row 1: Text */}
        <div className='w-full min-w-[574px] p-div bg-sec/10 backdrop-blur-lg border border-pri/50 rounded-tr-full'>
          <h3 className='max-w-4/5 pb-2 pl-2 text-acc tshadow-acc text-xl font-semibold tracking-widest border-b border-pri/30'>
            Digital art portfolio
          </h3>
          <p className='max-w-4/5 pt-2 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat...{' '}
            <span className='text-acc font-semibold hover:shadow-acc cursor-pointer'>
              More
            </span>
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className='flex gap-4'>
        <div className='relative w-1/3 min-w-[262px] h-[200px] border border-pri/50 rounded-tl-full shadow-sm shadow-acc overflow-hidden'>
          <Image
            src='/vackground-com.jpg'
            alt='Create portfolio'
            fill
            className='object-cover object-center'
          />
        </div>

        <div className='flex flex-col gap-4 w-2/3 min-w-[512px]'>
          <div className='h-[200px] border border-pri/50 rounded-tl-full rounded-br-full bg-gradient-to-r from-[rgba(2,6,24,1)] via-[rgba(37,72,246,1)] to-[rgba(252,37,105,1)]'>
            {/* <Image
              src='/creativeportfolio-5c.png'
              alt='Create portfolio'
              fill
              className='object-cover object-center'
            /> */}
          </div>

          {/* Buttons */}
          <div className='space-x-4'>
            <ButtonCTA type='boat'>Details</ButtonCTA>
            <ButtonCTA type='right'>Live</ButtonCTA>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard1;

// border-indigo-300/50
