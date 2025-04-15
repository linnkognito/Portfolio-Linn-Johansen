import NavLink from './NavLink';

function Nav() {
  return (
    <nav aria-label='main-navigation'>
      <ul className='flex gap-16 uppercase tracking-wider'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/portfolio'>Portfolio</NavLink>
        <NavLink href='/connect'>Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
