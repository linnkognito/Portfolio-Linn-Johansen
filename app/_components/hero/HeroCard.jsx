import Image from 'next/image';
import Link from 'next/link';

function HeroCard({ title, image, link }) {
  return (
    <article
      className='w-1/3 backdrop-blur-sm bg-bgr/10 rounded-xl p-4'
      aria-labelledby={`hero-card-title-${title
        .toLowerCase()
        .replace(/\s+/g, '-')}`}
    >
      <h4
        id={`hero-card-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className='text-xl font-semibold mb-2'
      >
        {title}
      </h4>
      <figure className='mb-4'>
        <Image
          src={image.src}
          alt={image.alt || `${title} image`}
          width={300}
          height={300}
          className='rounded-full'
        />
      </figure>
      <Link
        href={link.href}
        className='inline-block px-4 py-2 bg-pri/20 rounded-md hover:bg-pri/30 focus-ring transition-colors'
        aria-label={`${link.label} - ${title}`}
      >
        {link.label}
      </Link>
    </article>
  );
}

export default HeroCard;
