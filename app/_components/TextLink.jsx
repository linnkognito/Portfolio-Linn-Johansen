function TextLink({ children, href = '', ...props }) {
  return (
    <a
      href={href}
      className={`font-semibold text-pop hover:[text-shadow:0_0_7px_var(--color-pop)]`}
      {...props}
    >
      {children}
    </a>
  );
}

export default TextLink;
