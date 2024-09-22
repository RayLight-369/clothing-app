import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { memo } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useConfig } from '@/contexts/Config';
import Link from 'next/link';

const Card = ( { i } ) => {
  const [ isModalOpen, setIsModalOpen ] = useState( false );
  const { selectedImage, setSelectedImage } = useConfig();

  const variants = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const handleImageClick = ( src ) => {
    // setIsModalOpen( true );
    setSelectedImage( src );
  };

  const closeModal = () => {
    setIsModalOpen( false );
  };

  return (
    <>
      <motion.div
        className="w-full aspect-[4_/_5] h-full flex flex-col gap-2 group/card"
        whileHover={ { transition: { type: 'spring' }, scale: 1.04 } }
        variants={ variants }
      >
        <img
          src={ `/Imgs/${ i }` }
          className="w-full h-full object-cover transition-[filter] rounded-md filter brightness-75 group-hover/card:filter-none cursor-pointer"
          onClick={ () => handleImageClick( `/Imgs/${ i }` ) }
        />
        <div className="w-full flex justify-between items-start">
          <Link href={ "/" } className="content w-[80%] font-[Montserrat] font-medium flex flex-col relative">
            <p className="title font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Half Sleeve T-Shirt Half Sleeve T-Shirt
            </p>
            <p className="price">12 PKR</p>
          </Link>
          <Button variant="outline" className="aspect-square p-[10px] border-[1.5px] rounded-full text-foreground">
            <ShoppingCart />
          </Button>
        </div>
      </motion.div>

      {/* Render the modal */ }
      {/* { isModalOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 z-[52]"
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          />
          <ImageModal isOpen={ isModalOpen } onClose={ closeModal } imgSrc={ `/Imgs/${ i }.jpeg` } />
        </>
      ) } */}
    </>
  );
};

export default memo( Card );
