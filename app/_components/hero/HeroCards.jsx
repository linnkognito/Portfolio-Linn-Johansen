import Link from 'next/link';
import HeroCard from './HeroCard';

function HeroCards() {
  return (
    <div>
      <h3>Hero cards</h3>
      <HeroCard
        title='Currently working on'
        image={{ src: '', alt: '' }}
        link={{ href: '', label: '' }}
      />
      <div>
        <Link href='/portfolio'>Creations</Link>
        <Link href='/connect'>Connect</Link>
      </div>
    </div>
  );
}

export default HeroCards;
