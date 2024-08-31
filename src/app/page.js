"use client";

import CardsContainer from "@/components/CardsContainer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Home () {

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
    <motion.main className="font-[Alata] flex h-full min-h-screen w-screen flex-col" variants={ variants } initial="initial" animate="animate" transition={ { staggerChildren: 0.2 } } exit={ "exit" }>
      <h1 className="hidden select-none md:block fixed z-0 tracking-tight md:text-[10rem] -left-36 opacity-10 top-[calc(50%+25px)] -translate-y-1/2  rotate-90">Fashion</h1>

      <motion.div id="hero" className="flex justify-between w-screen min-h-[70vh] md:min-h-[95vh] bg-[linear-gradient(hsl(var(--background)/50%),hsl(var(--background)/75%)),url(/Imgs/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-fixed" variants={ variants }>

        <motion.div className="hero-content flex flex-col w-full gap-9 justify-center items-center p-4 md:p-10" variants={ variants } transition={ { staggerChildren: 0.2 } }>
          <motion.h1 className="text-[2.75rem] md:text-8xl text-center leading-[1.1] w-full font-[Montserrat] font-black tracking-[0.0275rem] " variants={ variants }>Explore Your <span className="md:text-background text-foreground [text-shadow:0px_0px_18px_hsl(var(--foreground)/20%)] md:[text-shadow:0px_1px_0_hsl(var(--foreground)),0px_0px_20px_hsl(var(--foreground)/40%)]">Style</span></motion.h1>
          <motion.p variants={ variants } className="text-[1.15rem] text-foreground md:text-opacity-100 md:text-foreground md:text-2xl text-center w-[97%] md:w-[77%] text-pretty">Elevate your wardrobe with clothes that shine, simple styles that make you feel fine. Dress to impress, every single time.</motion.p>
          <Link href={ "/store" } className='no-underline text-left w-[200px] px-10 py-3 bg-foreground text-background hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-3 hover:-skew-x-3 rounded-full relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[24px] after:-right-10 after:text-background after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Start Exploring</Link>
        </motion.div>

      </motion.div>

      <div id="new-arrivals" className="w-screen relative z-[5] bg-background h-fit p-10 flex flex-col gap-8">

        <div className="flex h-fit relative justify-center w-full before:absolute before:content-[''] before:z-[4] before:w-full before:h-[2px] before:bg-[linear-gradient(to_right,transparent_5%,hsl(var(--foreground)/40%)_50%,transparent_95%)] before:left-0 before:top-1/2">
          <h1 className="text-3xl w-fit font-bold text-center bg-background z-10 relative px-2">New Arrivals</h1>
        </div>
        <div id="content" className="w-full h-fit">

          <CardsContainer />

        </div>

        <hr className="block w-screen h-[2px] border-none outline-none bg-[linear-gradient(to_right,transparent_5%,hsl(var(--foreground)/40%)_50%,transparent_95%)]" />
      </div>

    </motion.main>
  );
}
