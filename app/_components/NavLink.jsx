import Link from 'next/link';

function NavLink({ children, isMainNav = true, href = '/' }) {
  return isMainNav ? (
    <li className='cursor-pointer pb-2 border-b border-transparent hover:border-slate-500 anim-border-col'>
      <Link href={href}>{children}</Link>
    </li>
  ) : (
    <li className='group flex-center cursor-pointer'>
      {/* <span
        aria-hidden='true'
        className='pr-2 text-slate-500 font-bold opacity-0 group-hover:opacity-100'
      >
        |
      </span> */}
      <Link href={href} className='text-sm'>
        {children}
      </Link>
      {/* <span
        aria-hidden='true'
        className='pl-2 text-slate-500 font-bold opacity-0 group-hover:opacity-100'
      >
        |
      </span> */}
    </li>
  );
}

export default NavLink;
