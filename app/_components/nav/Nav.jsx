import NavLink from '@/_components/nav/NavLink';
import MobileNav from './MobileNav';

function Nav({ pathname = '/' }) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/connect', label: 'Contact' },
  ];

  return (
    <nav aria-label='Main navigation' role='navigation'>
      <MobileNav pathname={pathname} links={navLinks} />

      {/* Desktop nav */}
      <ul
        className='hidden md:flex gap-16 tracking-wider uppercase'
        role='menubar'
        aria-label='Main menu'
      >
        {navLinks.map((li) => (
          <NavLink key={li.label} pathname={pathname} href={li.href}>
            {li.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
