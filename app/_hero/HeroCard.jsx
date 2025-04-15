import Image from 'next/image';
import Link from 'next/link';

function HeroCard({ title, image, link }) {
  return (
    <div className='w-1/3 backdrop-blur-sm bg-bgr/10 rounded-xl'>
      <h4>{title}</h4>
      <Image
        src={image.src}
        alt={image.alt}
        width={300}
        height={300}
        className='rounded-full'
      />
      <Link href={link.href}>{link.label}</Link>
    </div>
  );
}

export default HeroCard;
