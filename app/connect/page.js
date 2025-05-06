import SectionHeading from '@/_components/SectionHeading';
import {
  SocialLinkEmail,
  SocialLinkGitHub,
  SocialLinkLinkedIn,
  SocialLocation,
  SocialName,
} from '@/_components/Socials';

function Page() {
  return (
    <article
      aria-labelledby='contact-heading'
      className='flex flex-col gap-4 sm:gap-8 sm:flex-row items-center w-full min-w-fit bg-bgr/50 backdrop-blur-sm border border-pri/30'
    >
      {/* Title (Mid/Large screens) */}
      <div className='flex-center w-full sm:w-1/4 min-w-fit h-1/5 sm:h-full p-div text-right bg-bgr/50 border-b sm:border-r border-pri/30'>
        <SectionHeading tag='h1' id='contact-heading'>
          Contact
        </SectionHeading>
      </div>

      {/* Contact info */}
      <div className='flex flex-col items-end gap-2 w-full max-w-[600px] min-h-fit max-h-1/2 p-div'>
        <div className='flex flex-col gap-2 w-full'>
          <SocialName />
          <SocialLocation />
          <div className='flex gap-2 w-full'>
            <SocialLinkGitHub />
            <SocialLinkLinkedIn />
          </div>
          <SocialLinkEmail />
        </div>
      </div>
    </article>
  );
}

export default Page;
