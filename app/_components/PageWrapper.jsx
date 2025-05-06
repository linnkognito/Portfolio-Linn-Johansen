function PageWrapper({ children, theme = 'base', ...props }) {
  const themes = {
    base: 'bg-bgr/5 backdrop-blur-xs',
    dark: 'bg-bgr/5 backdrop-blur-md',
  };
  return (
    <section
      className={`w-full min-h-fit p-section rounded-xs ${themes[theme]}`}
      {...props}
    >
      {children}
    </section>
  );
}

export default PageWrapper;
