import {
  SocialLinkEmail,
  SocialLinkGitHub,
  SocialLinkLinkedIn,
  SocialLocation,
  SocialName,
} from '@/_components/Socials';
import PageHeading from '@/_components/text/PageHeading';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';

function Page() {
  return (
    <article
      aria-labelledby='contact-heading'
      className='flex-center flex-col w-full min-w-fit p-section bg-bgr/50 backdrop-blur-sm border border-pri/30'
    >
      <PageHeading id='contact-heading'>Contact</PageHeading>

      {/* Contact info */}
      <div className='flex justify-center w-full max-w-full h-full p-section'>
        <div className='flex flex-col items-end gap-2 w-full max-w-[600px] h-fit p-div bg-bgr/50 border border-pri/50 rounded-xs'>
          <div className='flex flex-col gap-2 w-full'>
            <SocialName />
            <SocialLocation />
            <DividerHorizontal />
            <SocialLinkEmail />
            <div className='flex gap-2 w-full'>
              <SocialLinkGitHub />
              <SocialLinkLinkedIn />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Page;
