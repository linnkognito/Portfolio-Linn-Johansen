function ColorOverlay({ color = 'sec', className = '' }) {
  const colors = {
    sec: 'bg-sec/20',
    pop: 'bg-pop/20',
    acc: 'bg-acc/20',
    txt: 'bg-txt/20',
    pri: 'bg-pri/20',
    sdw: 'bg-sdw/20',
  };

  return (
    <div
      className={`absolute inset-0 ${colors[color]} pointer-events-none ${className}`}
    />
  );
}

export default ColorOverlay;
