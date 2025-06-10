'use client';
import { useRouter } from 'next/navigation';
import ButtonCTA from './ButtonCTA';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

const BackButton = () => {
  const router = useRouter();

  return (
    <ButtonCTA
      variant='right'
      color='pop'
      ariaLabel='Go back'
      className='flex-center gap-2 w-1/2 min-w-fit py-[1px] font-semibold hover:shadow-[0_0_4px_#d9f99d]'
      onClick={() => router.back()}
    >
      Go back
    </ButtonCTA>
  );
};

export default BackButton;
