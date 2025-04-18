import DividerHorizontal from './DividerHorizontal';
import ButtonCTA from './ButtonCTA';

function InfoCard({ children, title = '', width = 'w-full max-w-1/3' }) {
  return (
    <div
      className={`flex flex-col gap-2 h-[400px] p-div bg-bgr/40 rounded-xs border border-pri/40 shadow-lg shadow-sdw/40 ${width}`}
    >
      <h3 className='text-center text-heading text-txt tshadow-txt text-lg font-semibold tracking-[0.75em] uppercase'>
        {title}
      </h3>
      <DividerHorizontal />
      <div className='flex-1 overflow-auto py-2 px-4'>{children}</div>
      <ButtonCTA type='right' className='mt-auto text-pop'>
        More
      </ButtonCTA>
    </div>
  );
}

export default InfoCard;
