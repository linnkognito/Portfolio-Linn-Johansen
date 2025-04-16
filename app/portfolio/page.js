import Heading from '@/app/_components/Heading';
import PortfolioCard1 from '../_portfolio/PortfolioCard1';

function Page() {
  return (
    <section
      aria-labelledby='heading-portfolio'
      className='w-full h-full min-h-fit bg-pri/5 backdrop-blur-sm rounded-xs'
    >
      <div className='p-section'>
        <h1
          id='heading-portfolio'
          className='w-full pb-2 pl-2 text-2xl text-pri font-medium tracking-[1em] tshadow-glow-sm border-b border-pri/30 uppercase'
        >
          Portfolio
        </h1>

        {/* Bio */}
        <div className='w-full h-full max-h-9/10 p-section'>
          <PortfolioCard1 />
        </div>
      </div>
    </section>
  );
}

export default Page;
