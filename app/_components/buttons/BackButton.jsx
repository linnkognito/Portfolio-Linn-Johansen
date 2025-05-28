'use client';
import { useRouter } from 'next/navigation';
import ButtonCTA from './ButtonCTA';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

const BackButton = () => {
  const router = useRouter();

  return (
    <ButtonCTA
      color='pop'
      ariaLabel='Go back'
      className='flex-center gap-2 w-1/3 min-w-fit text-base md:text-lg font-semibold hover:shadow-[0_0_4px_#d9f99d]'
      onClick={() => router.back()}
    >
      <ArrowLongLeftIcon className='h-6' />
      Go back
    </ButtonCTA>
  );
};

export default BackButton;
