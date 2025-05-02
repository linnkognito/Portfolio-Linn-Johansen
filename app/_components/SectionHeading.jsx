import DividerHorizontal from './dividers/DividerHorizontal';

function SectionHeading({
  children,
  tag: Tag = 'h2',
  id = '',
  stylized = false,
  color = 'txt',
  className = '',
  ...props
}) {
  const colors = {
    acc: 'text-acc tshadow-acc',
    pop: 'text-pop tshadow-pop',
    txt: 'text-txt tshadow-txt',
  };

  return (
    <>
      {stylized && <DividerHorizontal width='w-full' margin='mb-3' />}

      <Tag
        id={id}
        className={`text-heading text-xl font-semibold tracking-[0.75em] uppercase ${colors[color]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </>
  );
}

export default SectionHeading;
