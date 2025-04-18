function Separator({ height = 'h-6' }) {
  return (
    <div
      role='separator'
      aria-orientation='vertical'
      aria-label='Content divider'
      className={`border-r border-indigo-300/30 ${height}`}
    />
  );
}

export default Separator;
