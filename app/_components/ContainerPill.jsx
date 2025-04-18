function ContainerPill({
  children,
  theme = 'light',
  width = 'w-fit',
  className = '',
}) {
  const styles = {
    light: 'bg-pri/10 border-pri/20',
    dark: 'bg-bgr/65 border-pri/40',
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
