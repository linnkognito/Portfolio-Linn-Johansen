'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SocialLinkEmail,
  SocialLinkGitHub,
  SocialLinkLinkedIn,
  SocialLocation,
  SocialName,
} from '@/_components/Socials';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContactForm from './ContactForm';
import SectionHeading from '../text/SectionHeading';

function ContactInfo() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <>
      <div className='flex max-lg:flex-col items-center gap-10 w-full max-w-full h-full p-section'>
        <div className='flex flex-col justify-center items-end gap-2 w-full max-w-[600px] h-fit lg:h-full p-div bg-bgr/50 border border-pri/50 rounded-xs'>
          <div className='grow flex flex-col gap-4 w-full h-full'>
            <SectionHeading className='mt-4'>Details</SectionHeading>
            <DividerHorizontal />

            <SocialName />
            <SocialLocation />
            <DividerHorizontal />
            <span onClick={() => setShowEmailForm(true)}>
              <SocialLinkEmail />
            </span>
            <div className='flex gap-2 w-full'>
              <SocialLinkGitHub />
              <SocialLinkLinkedIn />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showEmailForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='overflow-hidden flex justify-center w-full mb-[16px]'
            >
              <ContactForm setShowEmailForm={setShowEmailForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ContactInfo;
