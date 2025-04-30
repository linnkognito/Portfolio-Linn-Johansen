import ContainerPill from './ContainerPill';

function SlideshowButtons({ amount = 0, index = null, setCurrentIndex }) {
  if (!amount || index === null) return null;

  const buttons = Array.from({ length: amount }, (_, i) => i);

  return (
    <ContainerPill className='flex gap-3 py-1 px-4'>
      {buttons.map((button) => (
        <button
          key={button}
          className={`w-3 h-3 rounded-full cursor-pointer hover:bg-pri transition-colors duration-200 ease-in-out ${
            index === button ? 'bg-pri' : 'bg-bgr'
          }`}
          onClick={() => setCurrentIndex(button)}
        ></button>
      ))}
    </ContainerPill>
  );
}

export default SlideshowButtons;
