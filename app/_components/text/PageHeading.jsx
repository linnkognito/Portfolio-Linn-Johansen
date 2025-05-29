import DividerHorizontal from '../dividers/DividerHorizontal';

function PageHeading({ children, id = '', border = true, ...props }) {
  return (
    <>
      <h1
        id={id}
        className={`w-full max-w-4/5 mx-auto text-lg sm:text-2xl md:text-3xl text-center text-heading text-pri font-semibold tracking-[0.9em] tshadow-glow uppercase `}
        {...props}
      >
        {children}
      </h1>
      {border && <DividerHorizontal width='w-9/10' margin='mt-5' />}
    </>
  );
}

export default PageHeading;
