import './globals.css';
import { Orbitron, Jura } from 'next/font/google';

import Header from './_components/Header';
import Footer from './_components/Footer';
import Image from 'next/image';

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
      <body className='relative aspect-auto h-screen w-screen max-w-screen'>
        <div className='absolute inset-10 flex-center z-[-1]'>
          <Image
            src='/spike.png'
            alt='Home page background image'
            fill
            className='object-contain'
          />
        </div>

        <Header />

        <main id='main-content'>{children}</main>
      </body>
      <Footer />
    </html>
  );
}

export default RootLayout;
