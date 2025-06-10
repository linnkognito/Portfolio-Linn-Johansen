'use client';

import Image from 'next/image';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ProjectCardDescription from '@_components/projects/ProjectCardDescription';
import ActionButtons from '@/_components/buttons/ActionButtons';
import ContainerPill from '@/_components/containers/ContainerPill';
import ProjectLabel from './ProjectLabel';
import { motion } from 'framer-motion';
import ButtonCTA from '../buttons/ButtonCTA';
import Link from 'next/link';

function ProjectCard({ project = null }) {
  if (!project) return null;

  const {
    title,
    shortDescription: description,
    path,
    mainImage,
    links,
    isCourseWork,
    isUnderConstruction,
  } = project;

  return (
    <motion.div
      layout={false}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col lg:flex-row gap-4 w-full max-w-[95%] h-auto px-4 py-4 bg-bgr/85 border border-pri/50 rounded-xs backdrop-blur-lg shadow-md shadow-sdw/50 will-change-[opacity,transform]'
    >
      {/* Preview Image */}
      <div className='relative w-full lg:max-w-1/2 aspect-[16/9] border border-pri/50 rounded-xs shadow shadow-pri/50'>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className='object-cover object-center rounded-xs'
        />
      </div>

      {/* Project Details Preview */}
      <div className='relative flex flex-col gap-2 sm:gap-4 w-full lg:max-w-1/2 sm:p-div'>
        {/* Label */}
        <ProjectLabel
          isCourseWork={isCourseWork}
          isUnderConstruction={isUnderConstruction}
        />
        <h2
          className='mt-1 sm:mt-2 pl-2 text-base sm:text-2xl text-heading text-pop font-semibold tracking-[0.3em] sm:tracking-[0.2em] uppercase'
          id='project-name'
        >
          {title}
        </h2>

        <DividerHorizontal margin='my-1' />

        {/* Description */}
        <ProjectCardDescription width='w-full' padding='pl-1 pr-2'>
          {description}
        </ProjectCardDescription>

        <DividerHorizontal margin='my-1' />

        {/* Action Buttons */}
        <ContainerPill
          theme='dark'
          className='hidden sm:block shadow-md shadow-bgr/50'
        >
          <ActionButtons
            buttonCTA={{ label: 'Details', href: path }}
            buttonGithub={{ href: links.github }}
            aria-label='Portfolio project action buttons'
            className='pl-1'
          />
        </ContainerPill>

        {/* Mobile */}
        <Link href={path} className='flex-center sm:hidden w-full px-4'>
          <ButtonCTA variant='right' color='pop' className='w-full max-w-9/10'>
            Details
          </ButtonCTA>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
