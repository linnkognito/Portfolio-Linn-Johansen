function ProjectCards({ children }) {
  return (
    <div
      className='flex-center gap-4 flex-col w-full h-full'
      role='list'
      aria-label='Project cards'
    >
      {children}
    </div>
  );
}

export default ProjectCards;
