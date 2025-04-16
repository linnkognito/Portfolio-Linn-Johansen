function ButtonCTA({ children }) {
  return (
    <button className='px-8 border border-indigo-300 rounded-bl-xl rounded-tr-xl tracking-widest font-medium uppercase hover:border-pri hover:bg-pri/20 hover:font-bold anim-prep transition-colors cursor-pointer'>
      {children}
    </button>
  );
}

export default ButtonCTA;
