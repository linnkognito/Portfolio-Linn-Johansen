import Logo from '@_components/Logo';
import NavWrapper from '@_components/nav/NavWrapper';

function Header({ ...props }) {
  return (
    <header
      className='flex justify-between w-full max-w-header mx-auto pl-10 pr-12 pt-6 pb-4'
      {...props}
    >
      <Logo />

      <NavWrapper />
    </header>
  );
}

export default Header;
