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
      <ImageFrame image={image} className='order-1 md:order-2' />

      <ContainerPill className='order-2 md:order-1 max-md:mx-auto md:ml-0 md:mt-10'>
        <TechIcons className='flex-row md:flex-col'>
          {technologies?.map((tech) => (
            <TechIcon
              key={tech.title}
              title={tech.title}
              width='w-6 md:w-8'
              icon={iconComponents[tech.icon]}
            />
          ))}
        </TechIcons>
      </ContainerPill>
    </>
  );
}

export default ProjectHero;
