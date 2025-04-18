import { Bars3Icon } from '@heroicons/react/24/outline';

function NavLinksMobile() {
  return (
    <nav className='md:hidden'>
      <Bars3Icon className='md:hidden size-8 hover:text-pri transition-colors cursor-pointer' />
    </nav>
  );
}

export default NavLinksMobile;
