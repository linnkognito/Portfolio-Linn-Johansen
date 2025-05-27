function ProjectFeatureCards({ children }) {
  return (
    <div className='flex-center flex-col p-div xl:flex-row gap-4 w-full items-stretch'>
      {children}
    </div>
  );
}

export default ProjectFeatureCards;
