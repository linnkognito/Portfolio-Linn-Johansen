import HeroCards from './_hero/HeroCards';

export default function Home() {
  return (
    <section aria-labelledby='index-heading'>
      <article>
        <h1 id='index-heading' className='w-fit text-orbitron'>
          <span className='text-heading'>Frontend Developer</span>
          <span>Linn Johansen</span>
        </h1>
        <h2>
          Dev/Design Hybrid &dash; Creative strategist meets frontend engineer
        </h2>

        <HeroCards />
      </article>
    </section>
  );
}
