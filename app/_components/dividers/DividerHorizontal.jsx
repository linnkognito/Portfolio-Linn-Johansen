function DividerHorizontal({
  width = 'w-full',
  margin = 'my-2',
  className = '',
  ariaLabel = 'Content divider',
}) {
  return (
    <div
      role='separator'
      aria-orientation='horizontal'
      aria-label={ariaLabel}
      className={`border-b border-pri/40 ${width} ${margin} ${className}`}
    />
  );
}

export default DividerHorizontal;
