function ContainerPill({
  children,
  theme = 'light',
  width = 'w-fit',
  className = '',
}) {
  const styles = {
    light: 'bg-pri/10 border-pri/20',
    dark: 'py-[2px] px-10 bg-bgr/65 border-pri/40',
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
