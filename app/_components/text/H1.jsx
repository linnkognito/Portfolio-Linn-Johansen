function H1() {
  return (
    <>
      <h1
        id='index-heading'
        className='hidden sm:flex flex-col gap-4 w-fit h-2/3 pt-1/3 uppercase'
      >
        <span className='w-fit mx-2 pl-2 pb-2 text-sm text-txt font-medium tracking-[1em] tshadow-txt border-b border-pri/30'>
          Frontend Developer
        </span>

        <span className='hidden sm:block w-full text-8xl text-pri font-semibold tshadow-glow tracking-widest'>
          L.Johansen
        </span>
      </h1>

      {/* Mobile */}
      <h1
        id='index-heading'
        className='sm:hidden flex flex-col items-center justify-center gap-4 w-fit pt-1/3 uppercase'
      >
        <span className='flex flex-col gap-2 w-8/10 text-sm text-center text-pop font-medium tracking-[1em] tshadow-txt'>
          <span>Frontend</span> <span>Developer</span>
        </span>

        <span className='sm:hidden w-full text-center text-4xl text-pri font-semibold tshadow-glow tracking-widest bg-bgr/70 p-10 border-y border-pri/30 shadow-md shadow-bgr'>
          Linn Johansen
        </span>
      </h1>
    </>
  );
}

export default H1;
