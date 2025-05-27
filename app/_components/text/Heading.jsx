function Heading({
  children,
  tag: Tag = 'h2',
  color = 'text-pri',
  textShadow = false,
  srOnly = false,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`${className} ${color} ${srOnly ? 'sr-only' : ''}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
