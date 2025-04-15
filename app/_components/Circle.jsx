function Circle({ children, padding = '', className = '', ...props }) {
  return (
    <div className={`rounded-full ${padding} ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Circle;
