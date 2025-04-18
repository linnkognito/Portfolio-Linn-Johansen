import HeroButtons from '@_hero/HeroButtons';
import HeroCards from '@_hero/HeroCards';

export default function Home() {
  return (
    <section aria-labelledby='index-heading' className='relative p-section'>
      <article className='pl-10 pt-[15vh]'>
        <h1
          id='index-heading'
          className='flex flex-col gap-2 w-fit h-2/3 pt-1/3 uppercase'
        >
          <span className='w-fit mx-2 pl-2 pb-2 text-sm text-pri font-medium tracking-[1em] tshadow-acc border-b border-pri/30'>
            Frontend Developer
          </span>
          <span className='w-full text-8xl text-pri font-semibold tshadow-glow tracking-widest'>
            L.Johansen
          </span>
        </h1>

        {/* Bio */}
        <div className='w-full max-w-1/3 pl-4 pt-6 text-justify'>
          <HeroButtons />
        </div>

        {/* <HeroCards /> */}
      </article>
    </section>
  );
}
