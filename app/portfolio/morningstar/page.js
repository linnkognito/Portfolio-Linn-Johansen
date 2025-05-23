import project from '@/portfolio/_data/morningstar-data';

import { Bold } from '@/_components/TextStyles';
import ProjectSection from '@/_components/projects/ProjectSection';
import EmblaCarousel from '@/_components/carousel/EmblaCarousel';
import PageHeading from '@/_components/PageHeading';
import ProjectHero from '@/_components/projects/ProjectHero';
import ProjectAbout from '@/_components/projects/ProjectAbout';
import ProjectUiUx from '@/_components/projects/ProjectUiUx';
import PageWrapper from '@/_components/PageWrapper';
import InfoCard from '@/_components/InfoCard';
import TextLink from '@/_components/TextLink';
import MorningstarUiDemo from '../_demo-components/MorningstarUiDemo';

function Page() {
  return (
    <PageWrapper theme='dark' aria-labelledby='portfolio-heading'>
      <PageHeading id='portfolio-heading'>{project.title}</PageHeading>

      <article className='flex flex-col items-center gap-10 p-section'>
        {/* Tech + Main image */}
        <ProjectSection theme='hero'>
          <ProjectHero project={project} />
        </ProjectSection>

        {/* About */}
        <ProjectSection theme='framed' className='w-8/10'>
          <ProjectAbout image={project.aboutImage}>
            <p>
              Morningstar is a fully responsive{' '}
              <Bold>e-commerce web application</Bold>
              designed and developed by me to practice{' '}
              <Bold>fullstack development</Bold> and hone my{' '}
              <Bold>UI design</Bold> skills with a retail focus.
            </p>
            <p>
              The app showcases a fake online clothing store and pulls product
              data from a custom-built <Bold>Express + MongoDB API</Bold>. On
              the frontend, I used <Bold>React</Bold>, <Bold>Tailwind CSS</Bold>
              , <Bold>Redux Toolkit</Bold>, and <Bold>React Router</Bold> to
              create a smooth, scalable shopping experience across devices.
            </p>
            <p>
              My goal was to simulate something akin to a real-world dev
              environment, from building an API and handling dynamic product
              filtering to styling modern, responsive layouts that feel like an
              actual storefront.
            </p>
          </ProjectAbout>
        </ProjectSection>

        {/* Carousel */}
        <ProjectSection theme='plain'>
          <EmblaCarousel
            slides={project.images}
            options={{ dragFree: true, loop: true }}
          />
        </ProjectSection>

        {/* UI/UX */}
        <ProjectSection theme='framed' className='w-8/10'>
          <ProjectUiUx project={project} UiDemo={<MorningstarUiDemo />}>
            <div className='space-y-4'>
              <p>
                Built with utility-first{' '}
                <TextLink
                  href='https://tailwindcss.com/'
                  aria-label='Tailwind CSS website'
                >
                  Tailwind
                </TextLink>{' '}
                classes for quick styling and consistency. The layout is fully
                responsive and scales smoothly from mobile to widescreen.
              </p>
              <p>
                I also focused on minimizing user friction - ensuring most
                content and actions are accessible within one or two clicks, no
                matter where you are, to create a flow that feels intuitive and
                natural.
              </p>
            </div>
          </ProjectUiUx>
        </ProjectSection>

        {/* Cards */}
        <ProjectSection theme='plain'>
          <InfoCard title='Dynamic Routing'>
            <p className='text-justify'>
              Built with{' '}
              <TextLink
                href='https://reactrouter.com/'
                aria-label='React Router website'
              >
                React Router
              </TextLink>
              , the app uses nested routes and dynamic URL parameters to handle
              product categories and item detail pages - just like a real online
              store. This prevents full page reloads in order to create a
              seamless user experience.
            </p>
          </InfoCard>
          <InfoCard title='State Management'>
            <p className='text-justify'>
              I knew I wanted to keep product and cart logic centralized. For
              this I used{' '}
              <TextLink
                href='https://redux-toolkit.js.org/'
                aria-label='Redux Toolkit website'
              >
                Redux Toolkit
              </TextLink>{' '}
              to manage global state for products, the cart, filters, and UI
              controls. Async logic (like API fetching) is handled with thunks.
            </p>
          </InfoCard>
          <InfoCard title='Custom API'>
            <p className='text-justify'>
              Powered by{' '}
              <TextLink
                href='https://reactrouter.com/'
                aria-label='React Router website'
              >
                Express
              </TextLink>{' '}
              and{' '}
              <TextLink
                href='https://www.mongodb.com/'
                aria-label='MongoDB website'
              >
                MongoDB
              </TextLink>
              , I built a custom REST API to serve product data. The API
              supports filtering, querying by category or type, and is designed
              to mirror the structure of a real-world backend.
            </p>
          </InfoCard>
        </ProjectSection>
      </article>
    </PageWrapper>
  );
}

export default Page;
