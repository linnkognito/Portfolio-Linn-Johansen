function DividerVertical({
  height = 'h-full',
  margin = 'mx-2',
  className = '',
  ariaLabel = 'Content divider',
}) {
  return (
    <div
      role='separator'
      aria-orientation='vertical'
      aria-label={ariaLabel}
      className={`border-r border-pri/30 ${height} ${margin} ${className}`}
    />
  );
}

export default DividerVertical;
