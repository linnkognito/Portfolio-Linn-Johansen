function PortfolioTemplateButton({ children, className = '' }) {
  const gradient =
    'bg-gradient-to-r from-transparent to-[rgba(252,37,105,0.5)] md:to-[rgba(252,37,105, 0.2)] hover:to-[rgba(252, 37, 105, 0.6)] md:hover:to-[rgba(252, 37, 105, 0.3)]';

  return (
    <button
      className={`w-fit py-2 px-4 tracking-wide rounded-xl
      shadow-[rgba(252,37,105,0.5)] shadow-sm
      text-txt text-shadow-[0px_0px_10px_rgba(252,37,105,0.8)]
      md:text-[rgba(252,37,105,1)] 
      will-change duration-300 ease-out transition-all
      hover:scale-105 hover:shadow-md hover:shadow-[rgba(252,37,105,0.7)]
      active:shadow-[inset_0_0_10px_#ffd6e3] ${gradient} ${className}`}
    >
      {children}
    </button>
  );
}

export default PortfolioTemplateButton;
