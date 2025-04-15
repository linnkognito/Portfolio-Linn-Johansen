import NavLink from './NavLink';

function Nav({ theme = 'site' }) {
  const isMainNav = theme === 'site';
  console.log(isMainNav);

  return (
    <nav aria-label='main-navigation'>
      <ul
        className={`flex uppercase tracking-wider ${
          isMainNav ? 'gap-16' : 'gap-6'
        }`}
      >
        <NavLink href='/' isMainNav={isMainNav}>
          Home
        </NavLink>
        <NavLink href='/portfolio' isMainNav={isMainNav}>
          Portfolio
        </NavLink>
        <NavLink href='/connect' isMainNav={isMainNav}>
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
