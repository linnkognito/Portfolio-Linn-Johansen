'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';

function NavWrapper() {
  const pathname = usePathname();

  return <Nav pathname={pathname} />;
}

export default NavWrapper;
