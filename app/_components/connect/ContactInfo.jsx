'use client';

import { useState } from 'react';
import {
  SocialLinkEmail,
  SocialLinkGitHub,
  SocialLinkLinkedIn,
  SocialLocation,
  SocialName,
} from '@/_components/Socials';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContactForm from './ContactForm';

function ContactInfo() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <>
      <div className='flex flex-col items-center gap-10 w-full max-w-full h-full p-section border'>
        <div className='flex flex-col items-end gap-2 w-full max-w-[600px] h-fit p-div bg-bgr/50 border border-pri/50 rounded-xs'>
          <div className='flex flex-col gap-2 w-full'>
            <SocialName />
            <SocialLocation />
            <DividerHorizontal />
            <span
              onClick={() => {
                console.log('clicked');
                setShowEmailForm(true);
              }}
            >
              <SocialLinkEmail />
            </span>
            <div className='flex gap-2 w-full'>
              <SocialLinkGitHub />
              <SocialLinkLinkedIn />
            </div>
          </div>
        </div>

        {showEmailForm && <ContactForm />}
      </div>
    </>
  );
}

export default ContactInfo;
