function DividerVertical({ height = 'h-6' }) {
  return (
    <span
      aria-hidden='true'
      className={`border-r border-indigo-300/30 ${height}`}
    ></span>
  );
}

export default DividerVertical;
