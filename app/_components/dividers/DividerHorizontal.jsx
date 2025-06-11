function DividerHorizontal({
  width = 'w-full',
  margin = 'my-2',
  color = 'pri',
  className = '',
  ariaLabel = 'Content divider',
}) {
  const colors = {
    pri: 'border-pri/40',
    pop: 'border-pop/50',
  };

  return (
    <div
      role='separator'
      aria-orientation='horizontal'
      aria-label={ariaLabel}
      className={`border-b ${colors[color]} ${width} ${margin} ${className}`}
    />
  );
}

export default DividerHorizontal;
