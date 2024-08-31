import { ShoppingCart } from 'lucide-react';
import { memo } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';


const Card = () => {

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
    <motion.div className='w-full aspect-[4_/_5] h-full flex flex-col gap-2 group/card' whileHover={ { transition: { type: "spring" }, scale: 1.04 } } variants={ variants }>
      <img src={ `/Imgs/pic${ Math.round( Math.random() + 1 ) }.jpg` } alt="" className='w-full h-full object-cover transition-[filter] rounded-md filter brightness-75 group-hover/card:filter-none' />
      <div className='w-full flex justify-between items-start'>
        <div className='content w-[80%] font-[Montserrat] font-medium flex flex-col relative'>
          <p className="title font-semibold overflow-hidden text-ellipsis whitespace-nowrap">Half Sleeve T-Shirt Half Sleeve T-Shirt</p>
          <p className="price">12 PKR</p>
        </div>
        <Button variant="outline" className="aspect-square p-[10px] border-[1.5px] rounded-full text-foreground">
          <ShoppingCart />
        </Button>
      </div>
    </motion.div>
  );
};

export default memo( Card );