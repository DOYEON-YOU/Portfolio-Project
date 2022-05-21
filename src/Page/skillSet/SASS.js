/* eslint-disable */

import React, { useEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SASS = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill sass'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          SASS(SCSS)
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        sass={window.location.pathname === '/stack/sass' ? 'true' : 'false'}
      />
    </>
  );
};

export default SASS;