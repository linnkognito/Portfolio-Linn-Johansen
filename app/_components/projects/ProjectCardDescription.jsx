function ProjectCardDescription({
  children,
  width = 'max-w-4/5',
  padding = 'pt-2',
  className = '',
}) {
  return (
    <div
      className={`flex flex-col gap-2 text-justify ${width} ${padding} ${className}`}
      aria-describedby='project-name'
    >
      {children}
    </div>
  );
}

export default ProjectCardDescription;
