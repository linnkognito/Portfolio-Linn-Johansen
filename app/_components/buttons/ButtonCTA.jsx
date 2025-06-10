function ButtonCTA({
  children,
  variant = 'left',
  color = 'base',
  ariaLabel = '',
  disabled = false,
  className = '',
  ...props
}) {
  const styles = {
    left: 'rounded-bl-xl rounded-tr-xl',
    right: 'rounded-tl-full rounded-br-full',
    flatLeft: 'rounded-tr-full',
    flatRight: 'rounded-tl-full',
    pill: 'rounded-full',
    boat: 'rounded-bl-full',
  };

  const colors = {
    base: 'border-indigo-300 hover:border-pri hover:bg-pri/20',
    pop: 'border-pop hover:border-pop hover:bg-pri/20',
    popHover: 'border-indigo-300 hover:border-pop hover:bg-pri/20',
  };

  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        px-8 
        border 
        tracking-widest 
        font-medium 
        text-center 
        uppercase 
        hover:font-bold 
        anim-prep 
        transition-colors 
        cursor-pointer
        focus-ring
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${styles[variant]}
        ${colors[color]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonCTA;
