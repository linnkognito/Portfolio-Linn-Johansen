'use client';

import ButtonCTA from '../buttons/ButtonCTA';
import ContentWrapper from '../containers/ContentWrapper';
import FormRow from '../ui/FormRow';
import SectionHeading from '../text/SectionHeading';
import DividerHorizontal from '../dividers/DividerHorizontal';

function ContactForm({ setShowEmailForm }) {
  return (
    <ContentWrapper className='flex flex-col gap-4 w-full max-w-[600px] p-div'>
      <form
        action='https://formsubmit.co/linn.es.johansen@gmail.com'
        method='POST'
        className='flex flex-col items-center justify-center gap-4 w-full'
      >
        <SectionHeading className='mt-4'>Contact me</SectionHeading>
        <DividerHorizontal />

        <FormRow
          type='text'
          label='Subject'
          htmlFor='subject'
          name='_subject'
          placeholder='Subject'
          required
        />

        <FormRow
          type='email'
          label='From'
          htmlFor='email'
          name='email'
          placeholder='name@example.com'
          required
        />

        <FormRow
          label='Message'
          htmlFor='message'
          name='message'
          placeholder='Your message...'
          textarea={true}
          required
        />

        <div className='flex justify-center gap-3 w-full max-w-8/10'>
          <ButtonCTA
            type='button'
            variant='pill'
            className='min-w-[134px] w-2/5 mt-2'
            onClick={() => setShowEmailForm(false)}
          >
            Cancel
          </ButtonCTA>
          <ButtonCTA
            type='submit'
            variant='pill'
            color='popHover'
            className='min-w-[134px] w-2/5 mt-2 hover:border-pop'
          >
            Send
          </ButtonCTA>
        </div>

        {/* Form Metadata */}
        <input
          type='hidden'
          name='_subject'
          value='New message from your portfolio!'
        />
        <input
          type='hidden'
          name='_next'
          value='http://localhost:3000/connect/success'
        />
        <input type='hidden' name='_captcha' value='false' />
      </form>
    </ContentWrapper>
  );
}

export default ContactForm;
