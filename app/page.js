import ActionButtons from '@_components/ActionButtons';

export default function Home() {
  return (
    <section
      aria-labelledby='index-heading'
      className='relative w-full p-section backdrop-blur-xs'
    >
      <article className='pl-10 pt-[15vh]'>
        <h1
          id='index-heading'
          className='flex flex-col gap-2 w-fit h-2/3 pt-1/3 uppercase'
        >
          <span className='w-fit mx-2 pl-2 pb-2 text-sm text-txt font-medium tracking-[1em] tshadow-txt border-b border-pri/30'>
            Frontend Developer
          </span>
          <span className='w-full text-8xl text-pri font-semibold tshadow-glow tracking-widest'>
            L.Johansen
          </span>
        </h1>

        {/* Bio */}
        <div className='w-full max-w-1/3 pl-4 pt-6 text-justify'>
          <ActionButtons
            theme='hero'
            buttonCTA={{ label: 'Discover', href: '/portfolio' }}
            aria-label='Hero section action buttons'
          />
        </div>

        {/* <HeroCards /> */}
      </article>
    </section>
  );
}
