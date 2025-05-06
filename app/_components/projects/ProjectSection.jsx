function ProjectSection({
  children,
  theme = 'framed',
  className = '',
  ...props
}) {
  const styles = {
    hero: 'flex gap-x-6 w-full max-w-[90%] mb-10 pl-8 pr-4',
    framed:
      'flex-center gap-10 p-div rounded-xs bg-bgr/50 backdrop-blur-lg border border border-pri/50 rounded-xs shadow-xl shadow-sdw/20',
    framedSmall:
      'flex-center gap-2 p-div rounded-xs bg-bgr/50 backdrop-blur-lg border border border-pri/50 rounded-xs shadow-xl shadow-sdw/20',
    plain: 'flex gap-x-10 w-full px-10 my-10',
  };

  return (
    <section className={`${styles[theme]} ${className}`} {...props}>
      {children}
    </section>
  );
}

export default ProjectSection;
