function TechIcons({ children, className = '' }) {
  return (
    <div
      className={`flex gap-4 w-fit p-1 md:p-2 rounded-xs ${className}`}
      role='list'
      aria-label='Technologies used'
    >
      {children}
    </div>
  );
}

export default TechIcons;
