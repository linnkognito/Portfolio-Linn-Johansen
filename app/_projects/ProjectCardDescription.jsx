function ProjectCardDescription({
  width = 'max-w-4/5',
  padding = 'pt-2',
  expand = true,
}) {
  return (
    <p
      className={`text-justify ${width} ${padding}`}
      aria-describedby='project-name'
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
      {expand && (
        <button
          className='text-acc font-semibold hover:shadow-acc cursor-pointer focus:outline-none focus:ring-2 focus:ring-pri focus:ring-offset-2'
          aria-label='Read more about Digital art portfolio'
        >
          More
        </button>
      )}
    </p>
  );
}

export default ProjectCardDescription;
