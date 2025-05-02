import PageHeading from '@/_components/PageHeading';

function Page() {
  return (
    <div>
      <PageHeading>About</PageHeading>
      {/* Bio */}
      <div className='w-full max-w-1/3 pl-4 pt-6 text-justify'>
        <h2 className='text-par text-indigo-200'>
          Detail-driven design-dev hybrid; think creative strategist meets
          frontend engineer. I fuse aesthetic instinct and JavaScript logic, and
          have built responsive, component-based interfaces using tools like
          React, Next.js, Tailwind CSS, and Node.js.
        </h2>
      </div>
    </div>
  );
}

export default Page;
