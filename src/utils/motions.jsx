import React from 'react';
import { motion } from 'framer-motion';

export const PageMotion = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, ease: 'easeIn' }}
  >
    {children}
  </motion.div>
);

export default PageMotion;
