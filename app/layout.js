import './globals.css';
import { Orbitron, Jura } from 'next/font/google';

import Header from '@/_components/ui/Header';
import Footer from '@/_components/ui/Footer';
import Image from 'next/image';
import Message from './_components/containers/Message';

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const jura = Jura({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-par',
});

export const metadata = {
  title: {
    template: 'Linn Johansen | %s',
    default: 'Linn Johansen | Front-End Developer',
  },
  description:
    'Portfolio of Linn Johansen, a front-end developer specializing in React, Next.js, and accessible design. Clean code meets creative interfaces.',
  lang: 'en',
};

function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`${jura.variable} ${orbitron.variable}`}
    >
      <body className='relative aspect-auto h-screen w-full max-w-screen overflow-x-hidden sm:px-6 pb-4'>
        <div
          role='img'
          className='fixed inset-0 flex items-center justify-end z-[-1]'
        >
          <Image
            src='/spike.png'
            alt='Home page background image'
            fill
            className='object-contain object-right translate-x-[-2rem]'
          />
        </div>

        <section
          aria-labelledby='home-heading'
          className='flex flex-col gap-4 h-full'
        >
          <Header />

          <main
            id='main-content'
            className='flex w-full max-w-site h-2/3 min-h-fit mx-auto sm:border sm:border-pri/50 sm:rounded-xs'
          >
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

export default RootLayout;
