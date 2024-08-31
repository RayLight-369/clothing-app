import { memo } from 'react';
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';


const CardsContainer = () => {

  const variants = {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <div className='w-full h-fit'>
      <AnimatePresence>
        <motion.div className='w-full h-full px-5 py-8 gap-x-10 gap-y-14 grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] justify-center' variants={ variants } initial="initial" animate="animate" transition={ { staggerChildren: 0.1 } }>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default memo( CardsContainer );