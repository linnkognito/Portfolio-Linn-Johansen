function TextLink({ children, href = '', theme = 'pop', ...props }) {
  const themes = {
    pop: 'text-pop hover:[text-shadow:0_0_7px_var(--color-pop)]',
    txt: 'text-txt hover:[text-shadow:0_0_7px_var(--color-txt)]',
  };

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`font-bold focus-ring cursor-pointer ${themes[theme]}`}
      {...props}
    >
      {children}
      {<span className='sr-only'>(opens in a new tab)</span>}
    </a>
  );
}

export default TextLink;
