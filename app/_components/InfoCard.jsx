import DividerHorizontal from './dividers/DividerHorizontal';
import ButtonCTA from './ButtonCTA';
import SectionHeading from './SectionHeading';

function InfoCard({
  children,
  title = '',
  width = 'w-full max-w-1/3',
  button = null,
}) {
  return (
    <div
      className={`flex flex-col gap-2 h-[400px] p-div bg-bgr/40 rounded-xs border border-pri/40 shadow-lg shadow-sdw/40 ${width}`}
    >
      <SectionHeading tag='h3' color='pop' className='text-center'>
        {title}
      </SectionHeading>

      <DividerHorizontal />

      <div className='flex-1 overflow-auto py-2 px-4'>{children}</div>

      <DividerHorizontal />

      {button && (
        <ButtonCTA type='right' className='mt-auto text-pop'>
          {button}
        </ButtonCTA>
      )}
    </div>
  );
}

export default InfoCard;
