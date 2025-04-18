function ContainerPill({
  children,
  width = 'w-fit',
  margin = 'mt-10',
  backgroundColor = 'bg-pri/10',
  borderColor = 'border-pri/20',
  className = '',
}) {
  return (
    <div
      className={`flex-center h-fit border rounded-full ${width} ${margin} ${backgroundColor} ${borderColor} ${className}`}
    >
      {children}
    </div>
  );
}

export default ContainerPill;
