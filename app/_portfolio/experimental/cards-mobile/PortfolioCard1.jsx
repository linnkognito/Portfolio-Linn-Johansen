import { Next, Reactjs, Tailwind } from '@react-symbols/icons';
import TechIcon from '@/app/_components/TechIcon';
import Image from 'next/image';

function PortfolioCard1() {
  return (
    <div className='flex flex-col gap-4 w-full max-w-2/3 h-full min-h-fit p-4'>
      {/* Techstack (top left) */}
      <div className='flex justify-end w-full'>
        <div className='flex grow gap-4 max-w-1/2 ml-auto px-4 py-2 bg-pri/10 border border-indigo-300 rounded-tr-full'>
          <TechIcon title='Next'>
            <Next />
          </TechIcon>
          <TechIcon title='React.js'>
            <Reactjs />
          </TechIcon>
          <TechIcon title='Tailwind CSS'>
            <Tailwind />
          </TechIcon>
        </div>
      </div>

      <div className='flex gap-4 w-full h-full'>
        {/* Left section */}
        <div className='flex flex-col gap-2 w-1/2 h-full'>
          {/* Image (big) */}
          <div className='relative grow w-full min-h-[500px] h-full bg-pri/10 border border-indigo-300 rounded-tl-full'>
            <Image
              src='/rose.png'
              alt='Rose'
              fill
              className='object-cover object-center'
            />
          </div>
          {/* Details */}
          <div className='w-full min-h-[350px] pr-6 pl-16 py-4 bg-bgr border border-indigo-300 rounded-bl-full'></div>
        </div>

        {/* Right section */}
        <div className='flex flex-col gap-4 w-1/2 h-full'>
          {/* Title */}
          <div className='w-full min-h-[600px] p-section bg-pri/10 border border-indigo-300'>
            <h2 className='text-3xl font-semibold tracking-widest uppercase'>
              Morningstar
            </h2>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Image (small) */}
          <div className='relative grow w-full h-full min-h-[200px] bg-pri/10 border border-indigo-300 rounded-full'>
            <Image
              src='/rose.png'
              alt='Rose'
              fill
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard1;
