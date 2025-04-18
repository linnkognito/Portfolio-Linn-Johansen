function ProjectCardHeader({ heading = 'Project', children }) {
  return (
    <div className='flex justify-between items-center max-w-4/5'>
      <h2
        className='max-w-4/5 pl-2 text-heading text-acc tshadow-acc text-xl font-semibold tracking-widest uppercase'
        id='project-name'
      >
        {heading}
      </h2>

      {children}
    </div>
  );
}

export default ProjectCardHeader;
