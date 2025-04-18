function TechIcons({ children, direction = 'row', className = '' }) {
  const flexDirection = direction === 'row' ? 'flex-row' : 'flex-col';

  return (
    <div
      className={`flex gap-4 w-fit px-2 py-2 rounded-xs ${flexDirection} ${className}`}
      role='list'
      aria-label='Technologies used'
    >
      {children}
    </div>
  );
}

export default TechIcons;
