import Link from 'next/link';

function NavLink({ children, href = '/', pathname = '/' }) {
  const isActive = pathname === href;

  return (
    <li
      className={`cursor-pointer pb-2 border-b anim-border-col ${
        isActive
          ? 'text-pri border-slate-300 hover:border-sec'
          : 'text-txt border-transparent hover:border-slate-500'
      }`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default NavLink;
