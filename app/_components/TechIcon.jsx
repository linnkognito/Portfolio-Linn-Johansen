function TechIcon({
  title = 'Technology icon',
  width = 'w-6',
  bg = 'bg-bgr',
  icon = null,
  label = false,
}) {
  if (!icon) return null;

  return (
    <div className='flex items-center gap-3'>
      <div
        title={title}
        role='img'
        aria-label={title}
        className={`flex gap-2 p-1 rounded-full shadow-around ${width} ${bg}`}
      >
        {icon}
      </div>
      {label && <span className='text-sm text-pri'>{title}</span>}
    </div>
  );
}

export default TechIcon;
