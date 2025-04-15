import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <header className='flex justify-between pl-10 pr-12 pt-6 pb-10'>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
