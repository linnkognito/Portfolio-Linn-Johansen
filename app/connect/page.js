import { Github } from '@react-symbols/icons';
import {
  AtSymbolIcon,
  MapPinIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
// import {  } from '@heroicons/react/24/outline';
import ContainerPill from '@/_components/ContainerPill';
import DividerVertical from '@/_components/dividers/DividerVertical';
import ProjectSection from '@/_components/projects/ProjectSection';
import SectionHeading from '@/_components/SectionHeading';
import TechIcon from '@/_components/TechIcon';
import TextLink from '@/_components/TextLink';

import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import Separator from '@/_components/dividers/Separator';

function Page() {
  return (
    <article className='flex-center gap-10 w-full p-section bg-bgr/10 backdrop-blur-sm border border-pri/30'>
      <SectionHeading tag='h1'>Contact</SectionHeading>
      <DividerVertical />

      <div className='flex flex-col items-end gap-6 w-1/2 h-full max-h-1/2'>
        <ProjectSection className='w-full h-fit min-h-full'>
          <ul className='flex flex-col gap-1 w-full'>
            {/* <DividerHorizontal /> */}
            <li className='flex gap-3 px-4'>
              <UserCircleIcon className='w-5 text-pri' />
              <Separator />
              Linn Johansen
            </li>

            <DividerHorizontal />

            <li className='flex gap-3 px-4'>
              <MapPinIcon className='w-5 text-pri' />
              <Separator />
              <a
                href='https://www.google.com/maps/place/Portland,+OR/@45.5422405,-122.9840171,10z/data=!3m1!4b1!4m6!3m5!1s0x54950b0b7da97427:0x1c36b9e6f6d18591!8m2!3d45.515232!4d-122.6783853!16s%2Fm%2F02frhbc?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D'
                className='hover:font-semibold hover:[text-shadow:0_0_7px_var(--color-txt)]'
              >
                Portland, OR
              </a>
            </li>

            <DividerHorizontal />
            <li className='flex gap-3 px-4'>
              <AtSymbolIcon className='w-5 text-pri' />
              <Separator />
              <TextLink>linn.es.johansen@gmail.com</TextLink>
            </li>
            {/* <DividerHorizontal /> */}
          </ul>
        </ProjectSection>

        <ContainerPill theme='pop' className='flex justify-end mx-4'>
          <TechIcon icon={<Github />} />
        </ContainerPill>
      </div>
    </article>
  );
}

export default Page;
