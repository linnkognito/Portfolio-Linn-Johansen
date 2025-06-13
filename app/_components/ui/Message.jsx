'use client';

import { motion } from 'framer-motion';
import PageWrapper from '@/_components/containers/PageWrapper';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import BackButton from './buttons/BackButton';
import SectionHeading from './text/SectionHeading';

function Message({ children, title, wrapper = true }) {
  return (
    <PageWrapper aria-labelledby='message-heading' className='w-full h-full'>
      <article
        className={`flex-center flex-col w-full max-sm:h-full text-justify ${
          wrapper
            ? 'p-section py-12 bg-bgr/85 backdrop-blur-sm border border-pri/30  rounded-xs'
            : ''
        }`}
      >
        <section className='flex-center flex-col gap-6 w-full max-w-8/10'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <SectionHeading
              id='message-heading'
              size='xlDynamic'
              color='pop'
              stylized={false}
            >
              {title}
            </SectionHeading>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.55,
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className='w-full origin-left'
          >
            <DividerHorizontal margin='m-0' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
            className='flex items-center flex-col gap-4 w-full py-4 px-10 text-base md:text-lg text-justify'
          >
            {children}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.55,
              duration: 0.6,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className='w-full origin-left'
          >
            <DividerHorizontal />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.45,
              ease: 'easeOut',
            }}
            className='w-full origin-center'
          >
            <BackButton />
          </motion.div>
        </section>
      </article>
    </PageWrapper>
  );
}

export default Message;
