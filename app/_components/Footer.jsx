function Footer() {
  const links = [
    {
      href: 'https://www.linkedin.com/in/linn-es-johansen/',
      label: 'LinkedIn',
    },
    { href: 'https://github.com/linnkognito', label: 'GitHub' },
  ];

  return (
    <footer className='flex gap-4 justify-between w-full max-w-site mx-auto px-4 py-1 bg-bgr/70 border border-pri/20 rounded-xs'>
      <div className='flex gap-4'>
        {links.map((li) => (
          <a
            key={li.label}
            href={li.href}
            target='_blank'
            rel='noopener noreferrer'
            className='px-2 bg-sec/10 text-xs border border-txt/20 rounded-full hover:bg-pri/15 hover:border-pop/50 will-change-color duration-300 ease-in-out'
          >
            {li.label}
          </a>
        ))}
      </div>

      <p className='text-xs text-pri'>&copy; Linn Johansen, 2025</p>
    </footer>
  );
}
export default Footer;
