import ContainerPill from '../_components/ContainerPill';

function ProjectFeatures({
  features = [],
  width = 'w-full max-w-4/5',
  padding = 'pt-2',
}) {
  if (!features.length) return null;

  return (
    <dl className={`flex flex-col gap-4 text-justify ${width} ${padding}`}>
      {features.map((feature) => (
        <div key={feature.label} className='flex flex-col gap-2 px-4 pb-4'>
          <dt className='font-semibold text-lg text-pri tracking-[0.2em] uppercase border-b border-pri/30'>
            <p>{feature.label}</p>
          </dt>
          <dd className='pl-2'>{feature.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default ProjectFeatures;
