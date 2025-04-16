import NavLink from './NavLink';

function Nav({ pathname = '/' }) {
  return (
    <nav aria-label='main-navigation'>
      <ul className='flex gap-16 tracking-wider uppercase'>
        <NavLink href='/' pathname={pathname}>
          Home
        </NavLink>
        <NavLink href='/portfolio' pathname={pathname}>
          Portfolio
        </NavLink>
        <NavLink href='/about' pathname={pathname}>
          About
        </NavLink>
        <NavLink href='/connect' pathname={pathname}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
