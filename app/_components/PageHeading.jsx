function PageHeading({ children, id = '', border = true, ...props }) {
  return (
    <h1
      id='portfolio-heading'
      className={`sm:max-w-4/5 pb-4 px-12 mx-4 sm:mx-auto text-2xl sm:text-3xl text-center text-heading text-pri font-semibold tracking-[0.9em] tshadow-glow  uppercase ${
        border ? 'border-b border-pri/30' : ''
      }`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default PageHeading;
