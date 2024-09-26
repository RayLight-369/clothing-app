"use client";

import CardsContainer from '@/components/CardsContainer';
import { useConfig } from '@/contexts/Config';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const page = () => {

  const { selectedImage, setSelectedImage } = useConfig();


  const variants = {
    initial: {
      y: -10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: 5,
      opacity: 0
    }
  };


  return (
    <section className='w-screen h-screen'>
      <motion.div id="hero" className="flex justify-between w-screen min-h-[60vh] md:min-h-[90vh] bg-[linear-gradient(hsl(var(--background)/50%),hsl(var(--background)/75%)),url(/Imgs/store-bg.jpg)] bg-center bg-cover bg-no-repeat md:bg-fixed" variants={ variants }>

        <motion.div className="hero-content flex flex-col w-full gap-9 justify-center items-center p-4 md:p-10" variants={ variants } transition={ { staggerChildren: 0.2 } }>
          <motion.h1 className="text-[2.75rem] md:text-7xl text-center md:leading-[1.2] leading-[1.1] w-full font-[Alata] font-black tracking-[0.0275rem] " variants={ variants }>Discover Your Fashion Identity</motion.h1>
          <motion.p variants={ variants } className="text-[1.15rem] font-[Montserrat] text-foreground md:text-[1.4rem] text-center w-[97%] md:w-[77%] text-pretty">Unleash your style potential and explore endless fashion possibilities across our curated categories.</motion.p>
          {/* <Link href={ "/store" } className='no-underline text-left w-[186px] px-10 py-3 bg-foreground text-background hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-2 hover:-skew-x-2 rounded-full relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[24px] after:-right-10 after:text-background after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Start Trending</Link> */ }
        </motion.div>

      </motion.div>
      <div className='w-full h-[1500px]'>
        <div className='md:w-[19vw] md:h-[calc(100vh-85px)] sticky top-[85px] border-r-2 py-3 pl-4 pr-3 float-left'>
          {/* <button className='w-9 h-9 p-1 aspect-square rounded-full border-2 bg-[#F2F2F2] absolute -right-4 top-3'>
            <ArrowLeft />
          </button> */}

          <h1 className='font-[Alata] text-xl'>Product Filter</h1>

        </div>
        <div className='md:w-[calc(100vw-20vw)] md:float-left'>
          <CardsContainer />
        </div>
      </div>
    </section>
  );
};

export default page;