function Footer() {
  return (
    <footer className='flex gap-4 justify-between w-full max-w-site mx-auto px-4 py-1 bg-bgr/70 border border-pri/20 rounded-xs'>
      <div className='flex gap-4'>
        <button className='px-2 bg-sec/10 text-xs border border-txt/20 rounded-full hover:bg-sec/20 hover:border-sec/50 will-change-color duration-300 ease-in-out'>
          <a
            href='https://www.linkedin.com/in/linn-es-johansen/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </button>
        <button className='px-2 bg-sec/10 text-xs border border-txt/20 rounded-full hover:bg-sec/20 hover:border-sec/50 will-change-color duration-300 ease-in-out'>
          <a
            href='https://github.com/linnkognito'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </button>
        <button className='px-2 bg-sec/10 text-xs border border-txt/20 rounded-full hover:bg-sec/20 hover:border-sec/50 will-change-color duration-300 ease-in-out'>
          <a href='' target='_blank' rel='noopener noreferrer'>
            Discord
          </a>
        </button>
      </div>
      <p className='text-xs text-pri'>&copy; Linn Johansen, 2025</p>
    </footer>
  );
}

export default Footer;
