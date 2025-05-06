function TechIcon({
  children,
  title = 'Technology icon',
  width = 'w-6',
  bg = 'bg-bgr',
  icon = null,
  label = false,
}) {
  if (!icon && !children) return null;

  return (
    <div className='flex-center gap-3'>
      <div
        title={title}
        role='img'
        aria-label={title}
        className={`flex-center gap-2 p-1 rounded-full shadow-around ${width} ${bg}`}
      >
        {icon || children}
      </div>
      {label && <span className='text-sm text-pri'>{title}</span>}
    </div>
  );
}

export default TechIcon;
