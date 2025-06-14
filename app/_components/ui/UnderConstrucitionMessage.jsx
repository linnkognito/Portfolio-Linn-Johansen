import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Message from './Message';

function UnderConstrucitionMessage() {
  return (
    <Message title='Under construction'>
      <p className='flex-center gap-4'>
        <WrenchScrewdriverIcon className='h-6 text-pri' /> This page is
        currently under construction.
      </p>
    </Message>
  );
}

export default UnderConstrucitionMessage;
