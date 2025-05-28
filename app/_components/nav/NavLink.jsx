import Link from 'next/link';

function NavLink({
  children,
  href = '/',
  pathname = '/',
  onClick,
  className = '',
}) {
  const isActive = pathname === href;

  return (
    <li
      className={`hover:text-pop uppercase cursor-pointer pb-2 border-b anim-border-col ${
        isActive
          ? 'text-pri  border-slate-300 hover:border-pri'
          : 'text-txt border-transparent hover:border-slate-500'
      } ${className}`}
      role='menuitem'
    >
      <Link
        href={href}
        role='menuitem'
        aria-current={isActive ? 'page' : undefined}
        className='focus-ring'
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
