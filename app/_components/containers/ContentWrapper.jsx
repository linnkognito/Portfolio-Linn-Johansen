function ContentWrapper({
  children,
  theme = 'base',
  border = 'base',
  className = '',
  ...props
}) {
  const styles = {
    base: 'flex-center gap-10 p-div bg-bgr/50 backdrop-blur-lg rounded-xs shadow-xl shadow-sdw/20',
    minimal: 'px-6 py-4 bg-bgr/80 rounded-xs',
  };

  const borders = {
    none: '',
    base: 'border border-pri/50',
    pop: 'border border-pop/50',
    acc: 'border border-acc/50',
    sec: 'border border-sec',
    pri: 'border border-pri/50',
    sdw: 'border border-sdw/50',
    txt: 'border border-txt/50',
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
