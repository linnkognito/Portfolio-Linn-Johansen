'use client';

import { motion } from 'framer-motion';

function ProjectSection({
  children,
  theme = 'framed',
  className = '',
  ...props
}) {
  const styles = {
    hero: 'flex flex-col md:flex-row gap-2 md:gap-6 w-full max-w-[90%] md:mb-10 md:pl-8 md:pr-4',
    framed:
      'flex-center gap-10 p-div rounded-xs bg-bgr/50 backdrop-blur-lg border border-pri/50 rounded-xs shadow-xl shadow-sdw/20',
    framedSmall:
      'flex-center gap-2 p-div bg-bgr/50 backdrop-blur-lg border border-pri/50 rounded-xs shadow-xl shadow-sdw/20',
    plain: 'flex gap-10 w-full md:my-10',
    index:
      'bg-bgr/50 backdrop-blur-lg border border-pri/50 rounded-xs shadow-xl shadow-sdw/20',
  };

  return (
    <motion.section
      layout={false}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={`will-change-[opacity,transform] ${styles[theme]} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export default ProjectSection;
