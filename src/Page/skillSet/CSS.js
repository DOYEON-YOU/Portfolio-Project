/* eslint-disable */

import React, { useLayoutEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';

const CSS = () => {
  useLayoutEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill css'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          CSS
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        css={window.location.pathname == '/stack/css' ? 'true' : 'false'}
      />
    </>
  );
};

export default CSS;
