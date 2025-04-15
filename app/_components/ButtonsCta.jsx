import Link from 'next/link';
import Circle from './Circle';

function ButtonsCta({ children }) {
  return (
    <div className='flex justify-between gap-6 h-fit'>
      <button className='border border-txt rounded-bl-xl rounded-tr-xl'>
        <Link href='/projects'>Discover</Link>
      </button>
      <span className='h-full border border-txt/30'></span>
      <button>
        <Circle></Circle>
        <Link href='/contact'>Connect</Link>
      </button>
    </div>
  );
}

export default ButtonsCta;
