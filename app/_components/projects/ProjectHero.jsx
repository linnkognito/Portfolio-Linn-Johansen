import {
  Js,
  Next,
  Node,
  Pug,
  Reactjs,
  Sanity,
  Supabase,
  Tailwind,
  Vite,
} from '@react-symbols/icons';
import Image from 'next/image';
import ContainerPill from '@/_components/containers/ContainerPill';
import TechIcon from '@/_components/technologies/TechIcon';
import TechIcons from '@/_components/technologies/TechIcons';

function ProjectHero({ project = null }) {
  if (!project) return null;

  const { technologies, mainImage: image } = project;

  const iconComponents = {
    javascript: <Js />,
    nextjs: <Next />,
    nodejs: <Node />,
    pug: <Pug />,
    reactjs: <Reactjs />,
    sanity: <Sanity />,
    supabase: <Supabase />,
    tailwind: <Tailwind />,
    vite: <Vite />,
  };

  return (
    <>
      <ContainerPill className='mt-10'>
        <TechIcons direction='col'>
          {technologies?.map((tech) => (
            <TechIcon
              key={tech.title}
              title={tech.title}
              width='w-8'
              icon={iconComponents[tech.icon]}
            />
          ))}
        </TechIcons>
      </ContainerPill>

      <div className='relative w-full mx-auto aspect-[16/9] border border-pri/30 rounded-xs shadow-xl shadow-sdw/30'>
        <div className='relative aspect-[16/9] m-4 rounded-xs shadow-subtle-pri'>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover object-center border border-pri rounded-xs'
          />
        </div>
      </div>
    </>
  );
}

export default ProjectHero;
