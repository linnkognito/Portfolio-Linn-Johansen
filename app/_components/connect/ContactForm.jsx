'use client';

import ButtonCTA from '../buttons/ButtonCTA';
import ContentWrapper from '../containers/ContentWrapper';
import FormRow from '../ui/FormRow';

function ContactForm() {
  return (
    <ContentWrapper className='flex flex-col gap-4 w-full max-w-[600px] p-div'>
      <form
        action='https://formsubmit.co/linn.es.johansen@gmail.com'
        method='POST'
        className='flex flex-col items-center justify-center gap-4 w-full'
      >
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

        <input
          type='hidden'
          name='_next'
          value='https://www.linnjohansen.com/connect/success'
        />

        <ButtonCTA type='submit' variant='right' className='w-1/2 mt-2'>
          Send
        </ButtonCTA>

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
      </form>
    </ContentWrapper>
  );
}

export default ContactForm;
