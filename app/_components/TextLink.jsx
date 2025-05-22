function TextLink({ children, href = '', theme = 'pop', ...props }) {
  const themes = {
    pop: 'text-pop hover:[text-shadow:0_0_7px_var(--color-pop)]',
    txt: 'text-txt hover:[text-shadow:0_0_7px_var(--color-txt)]',
  };
  return (
    <a href={href} className={`font-semibold ${themes[theme]}`} {...props}>
      {children}
    </a>
  );
}

export default TextLink;
