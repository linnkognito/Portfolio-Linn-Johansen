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
      className={`${className} ${color} ${margin} ${srOnly ? 'sr-only' : ''} ${
        textShadow ? 'text-shadow' : ''
      } text-5xl tracking-wide`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Heading;
