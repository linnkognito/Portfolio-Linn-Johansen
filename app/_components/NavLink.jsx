import Link from 'next/link';

function NavLink({ children, href = '/', ariaLabel = 'Link' }) {
  return (
    <li className='cursor-pointer pb-2 border-b border-transparent hover:border-slate-500'>
      <Link href={href} aria-label={ariaLabel}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
