function ProjectCardDescription({
  children,
  width = 'max-w-4/5',
  padding = 'pt-2',
}) {
  return (
    <p
      className={`text-justify ${width} ${padding}`}
      aria-describedby='project-name'
    >
      {children ||
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    </p>
  );
}

export default ProjectCardDescription;
