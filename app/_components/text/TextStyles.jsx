export function Bold({ children }) {
  return <span className='font-bold'>{children}</span>;
}
export function Italic({ children }) {
  return <span className='italic'>{children}</span>;
}
export function Uppercase({ children }) {
  return <span className='uppercase'>{children}</span>;
}
export function FontColor({ children, theme = 'pop', className = '' }) {
  const themes = {
    pop: 'text-pop',
    txt: 'text-txt',
    pri: 'text-pri',
    acc: 'text-acc',
    sec: 'text-sec',
  };

  return <span className={`${themes[theme]} ${className}`}>{children}</span>;
}
