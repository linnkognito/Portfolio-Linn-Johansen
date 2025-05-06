import { Github } from '@react-symbols/icons';
import {
  AtSymbolIcon,
  MapPinIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import ContainerPill from './ContainerPill';
import TechIcon from './TechIcon';
import Separator from './dividers/Separator';
import TextLink from './TextLink';

export function SocialLinkGitHub() {
  return (
    <ContainerPill
      theme='borderPop'
      width='w-full'
      className='group gap-2 justify-start cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
    >
      <TechIcon icon={<Github />} />
      <p className='group-hover:font-semibold group-hover:[text-shadow:0_0_7px_var(--color-txt)]'>
        GitHub
      </p>
    </ContainerPill>
  );
}

export function SocialLinkLinkedIn() {
  return (
    <ContainerPill
      theme='borderPop'
      width='w-full'
      className='group gap-2 justify-start cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
    >
      <TechIcon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='max-w-full p-[2px]'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
        </svg>
      </TechIcon>

      <p className='group-hover:font-semibold group-hover:[text-shadow:0_0_7px_var(--color-txt)]'>
        LinkedIn
      </p>
    </ContainerPill>
  );
}

export function SocialLinkEmail() {
  return (
    <ContainerPill
      theme='borderPop'
      width='w-full'
      className='group gap-2 justify-start cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
    >
      <AtSymbolIcon className='w-5 text-pri group-hover:text-txt' />
      <Separator />
      <TextLink>linn.es.johansen@gmail.com</TextLink>
    </ContainerPill>
  );
}

export function SocialName() {
  return (
    <ContainerPill
      theme='pop'
      width='w-full'
      className='group gap-2 justify-start'
    >
      <UserCircleIcon className='w-5 text-pri' />
      <Separator />
      Linn Johansen
    </ContainerPill>
  );
}

export function SocialLocation() {
  return (
    <ContainerPill
      theme='pop'
      width='w-full'
      className='group gap-2 justify-start font-semibold cursor-pointer hover:border-pop hover:shadow-sm hover:shadow-pop/20 hover:bg-pop/20 transition-all duration-300 ease-in-out'
    >
      <MapPinIcon className='w-5 text-pri group-hover:text-txt' />
      <Separator />
      <a
        href='https://www.google.com/maps/place/Portland,+OR/@45.5422405,-122.9840171,10z/data=!3m1!4b1!4m6!3m5!1s0x54950b0b7da97427:0x1c36b9e6f6d18591!8m2!3d45.515232!4d-122.6783853!16s%2Fm%2F02frhbc?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D'
        className='hover:font-semibold hover:[text-shadow:0_0_7px_var(--color-txt)]'
      >
        Portland, OR
      </a>
    </ContainerPill>
  );
}
