import Link from 'next/link';

function NavLink({ children, href = '/' }) {
  return (
    <li className='cursor-pointer pb-2 border-b border-transparent hover:border-slate-500 anim-border-col'>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default NavLink;
