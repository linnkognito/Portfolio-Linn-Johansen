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
import ImageFrame from '../ImageFrame';

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

      <ImageFrame image={image} />
    </>
  );
}

export default ProjectHero;
