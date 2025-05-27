function ProjectUiDemo({ children, image = false, className = '' }) {
  return (
    <>
      {image ? (
        <div
          className={`relative aspect-[9/16] m-4 rounded-xs shadow-subtle-pri ${className}`}
        >
          {children}
        </div>
      ) : (
        <div
          className={`w-full p-div rounded-xs shadow-subtle-pri ${className}`}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default ProjectUiDemo;
