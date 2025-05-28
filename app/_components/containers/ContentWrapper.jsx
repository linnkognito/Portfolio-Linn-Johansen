function ContentWrapper({
  children,
  theme = 'base',
  border = 'base',
  className = '',
  ...props
}) {
  const styles = {
    base: 'flex-center gap-10 p-div bg-bgr/50 backdrop-blur-lg rounded-xs shadow-xl shadow-sdw/20',
  };

  const borders = {
    base: 'border border-pri/50',
    pop: 'border border-pop/50',
  };

  return (
    <div
      className={`${styles[theme]} ${borders[border]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContentWrapper;
