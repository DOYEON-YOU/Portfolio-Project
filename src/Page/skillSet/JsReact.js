/* eslint-disable */

import React, { useLayoutEffect } from 'react';
import SkillList from './Components/SkillList';
import Exit from './Components/Exit';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const JsReact = () => {
  useLayoutEffect(() => {
    AOS.init();
  });

  return (
    <>
      <motion.div
        className='skill react'
        animate={{
          scale: [0.8, 1],
          opacity: [0, 1],
        }}>
        <h1 className='title' data-aos='flip-up' data-aos-duration='1000'>
          React
        </h1>
        <hr />
      </motion.div>
      <Exit />
      <SkillList
        react={window.location.pathname == '/stack/react' ? 'true' : 'false'}
      />
    </>
  );
};

export default JsReact;
