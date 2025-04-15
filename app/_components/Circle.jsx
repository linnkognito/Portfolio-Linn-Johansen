function Circle({
  children,
  width = 'w-8',
  height = 'h-8',
  padding = '',
  color = 'bg-txt/20',
  className = '',
  ...props
}) {
  return (
    <div
      className={`rounded-full ${width} ${height} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Circle;
