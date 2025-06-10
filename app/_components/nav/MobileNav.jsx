'use client';

import { useRef, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import useDismiss from '@/hooks/useDismiss';
import NavLink from './NavLink';

function MobileNav({ pathname, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useDismiss(dropdownRef, isOpen, setIsOpen);

  return (
    <div ref={dropdownRef} className='relative md:hidden'>
      <button
        className='hover:text-pri cursor-pointer hover:scale-110 will-change-transform duration-300 ease-in-out'
        onClick={toggleMenu}
      >
        {isOpen ? (
          <XMarkIcon className='size-8 text-pop hover:text-pri transition-colors' />
        ) : (
          <Bars3Icon className='size-8 hover:text-pop transition-colors' />
        )}
      </button>

      {isOpen && (
        <div
          className='absolute top-full right-0 w-50 mt-2 p-div bg-bgr border border-pri/50 rounded-xs shadow-xl shadow-pri z-100'
          role='menu'
        >
          <ul className='flex flex-col gap-4'>
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                pathname={pathname}
                className=''
                onClick={toggleMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
