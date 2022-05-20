import React from 'react';
import Arrow from '../Components/Arrow';
import { motion } from 'framer-motion';
import Sidebar from '../Components/Sidebar';

const Project = props => {
  return (
    <motion.div
      variants={props.variants}
      initial={props.enter}
      animate={props.center}
      exit={props.exit}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}>
      <div className='page project'>
        <Arrow next='info' />
        <Sidebar project={window.location.pathname === '/project' ? 'true' : 'false'}/>
      </div>
    </motion.div>
  );
};

export default Project;
