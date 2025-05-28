function ContainerPill({
  children,
  theme = 'light',
  width = 'w-fit',
  className = '',
}) {
  const styles = {
    light: 'bg-pri/10 border-pri/20',
    dark: 'py-[2px] px-10 bg-bgr/65 border-pri/40',
    pop: 'py-1 px-1 md:px-10 bg-txt/15 border-pri/80',
    borderPop: 'py-1 px-1 md:px-10 bg-txt/15 border-pop/80',
    borderPopDark: 'py-1 px-1 md:px-10 bg-bgr/65 border-pop/80',
    borderPopDarkSm: 'px-4 text-sm tracking-wide bg-bgr/65 border-pop/50',
    label: 'px-2 text-xs tracking-wide bg-pop/20 border-pop/80',
  };

  return (
    <div
      className={`flex-center h-fit border rounded-full ${width}  ${styles[theme]} ${className}`}
    >
      {children}
    </div>
  );
}

export default ContainerPill;
