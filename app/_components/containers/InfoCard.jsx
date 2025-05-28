import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ButtonCTA from '@/_components/buttons/ButtonCTA';
import SectionHeading from '@/_components/text/SectionHeading';

function InfoCard({
  children,
  title = '',
  width = 'w-full xl:max-w-1/3',
  button = null,
}) {
  return (
    <div
      className={`flex flex-col flex-1 gap-2 min-h-fit xl:min-h-[400px] p-div bg-bgr/80 rounded-xs border border-pri/40 shadow-lg shadow-sdw/40 ${width}`}
    >
      <SectionHeading
        tag='h3'
        color='pop'
        size='lg'
        className='flex-center flex-1 max-h-[60px] text-center'
      >
        {title}
      </SectionHeading>

      <DividerHorizontal />

      <div className='flex-1 py-2 px-4'>{children}</div>

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
