import Image from 'next/image';
import ContainerPill from '../ContainerPill';
import TechIcon from '../TechIcon';
import TechIcons from '../TechIcons';

function ProjectHero({ project = null }) {
  if (!project) return null;
  const { technologies, mainImage: image } = project;

  return (
    <>
      <ContainerPill className='mt-10'>
        <TechIcons direction='col'>
          {technologies.map((tech) => (
            <TechIcon
              key={tech.title}
              title={tech.title}
              width='w-8'
              icon={tech.icon}
            />
          ))}
        </TechIcons>
      </ContainerPill>

      <div className='relative w-full mx-auto aspect-[16/9] border border-bgr/10 rounded-xs shadow-xl shadow-sdw/30'>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className='object-cover object-center rounded-xs'
        />
      </div>
    </>
  );
}

export default ProjectHero;
