import { memo } from 'react';
import Card from './Card';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const CardsContainer = () => {

  const [ ref, inView ] = useInView( {
    triggerOnce: true
  } );

  const variants = {
    initial: {
      y: -20,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
    }
  };

  const imgs = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

  return (
    <div className='w-full h-fit'>
      <AnimatePresence>
        <motion.div ref={ ref } className='w-full h-full px-5 py-8 gap-x-10 gap-y-14 grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] justify-center' variants={ variants } initial="initial" animate={ inView ? "animate" : "initial" } transition={ { staggerChildren: 0.2 } }>

          <Card i={ 1 + ".png" } key={ 100 } />

          {
            imgs.map( ( img, key ) => (
              <Card i={ img + ".jpeg" } key={ key } />
            ) )
          }
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default memo( CardsContainer );