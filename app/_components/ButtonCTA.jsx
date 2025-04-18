function ButtonCTA({
  children,
  type = 'left',
  onClick,
  ariaLabel,
  disabled = false,
}) {
  const styles = {
    left: 'rounded-bl-xl rounded-tr-xl',
    right: 'rounded-tl-full rounded-br-full',
    boat: 'rounded-bl-full',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        px-8 
        border 
        border-indigo-300 
        tracking-widest 
        font-medium 
        uppercase 
        hover:border-pri 
        hover:bg-pri/20 
        hover:font-bold 
        anim-prep 
        transition-colors 
        cursor-pointer
        focus:outline-none 
        focus:ring-2 
        focus:ring-pri 
        focus:ring-offset-2
        focus:border-pri
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${styles[type]}
      `}
    >
      {children}
    </button>
  );
}

export default ButtonCTA;
