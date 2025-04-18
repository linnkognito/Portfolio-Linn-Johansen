import ContainerPill from '../_components/ContainerPill';

function ProjectFeatures({
  features = [],
  width = 'w-full max-w-4/5',
  padding = 'pt-2 pl-4',
  label = '',
  value = '',
}) {
  if (!features.length) return null;

  return (
    <dl className={`flex flex-col gap-4 text-justify ${width} ${padding}`}>
      {features.map((feature) => (
        <>
          <dt className='w-full font-semibold text-lg text-pri tracking-[0.2em] uppercase'>
            {feature.label}
          </dt>
          <span className='grow mx-4 border-pri/30 border-b' />
          <dd className='w-full min-w-1/3'>{feature.value}</dd>
        </>
      ))}
    </dl>
  );
}

export default ProjectFeatures;
