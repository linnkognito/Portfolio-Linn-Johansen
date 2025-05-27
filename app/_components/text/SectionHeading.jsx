import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function SectionHeading({
  children,
  tag: Tag = 'h2',
  id = '',
  size = 'xl',
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

  const fontSize = {
    xs: 'text-xs',
    sm: 'text-base',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    xlDynamic: 'text-md lg:text-lg xl:text-xl',
    '2xl': 'text-2xl',
  };

  return (
    <>
      {stylized && <DividerHorizontal width='w-full' margin='mb-3' />}

      <Tag
        id={id}
        className={`text-heading font-semibold tracking-[0.75em] uppercase ${colors[color]} ${fontSize[size]} ${className}`}
        {...props}
      >
        {children}
      </Tag>
    </>
  );
}

export default SectionHeading;
