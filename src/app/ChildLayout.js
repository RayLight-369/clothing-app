"use client";

import { AnimatePresence, MotionConfig } from 'framer-motion';
import React from 'react';

const ChildLayout = ( { children } ) => {
  return (
    // <MotionConfig transition={ {
    //   type: "just",
    //   staggerChildren
    // }}>
    <AnimatePresence mode='wait'>
      { children }
    </AnimatePresence>
    // </MotionConfig>
  );
};

export default ChildLayout;