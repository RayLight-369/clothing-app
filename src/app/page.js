import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home () {

  return (
    <main className="font-[Alata] flex h-full min-h-screen w-screen flex-col items-center justify-between">
      <div className="flex justify-between w-screen min-h-[95vh] bg-[linear-gradient(hsl(var(--background)/50%),hsl(var(--background)/75%)),url(/Imgs/hero-bg.jpg)] bg-center bg-cover bg-no-repeat bg-fixed">

        <div className="hero-content flex flex-col w-full gap-9 justify-center items-center p-10">

          <h1 className="text-8xl text-center leading-[1.1] w-[100%] font-[Montserrat] font-black tracking-[0.0275rem] ">Explore Your <span className="text-background [text-shadow:0px_1px_0_hsl(var(--foreground)),0px_0px_20px_hsl(var(--foreground)/40%)]">Style</span></h1>
          <p className="text-2xl text-center w-[97%] md:w-[77%] text-pretty">Elevate your wardrobe with clothes that shine, simple styles that make you feel fine. Dress to impress, every single time.</p>
          <Link href={ "/store" } className='no-underline text-left w-[200px] px-10 py-2 bg-foreground text-background hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-3 hover:-skew-x-3 rounded-full relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[24px] after:-right-10 after:text-background after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Start Exploring</Link>

        </div>

      </div>

      <div id="new-arrivals" className="w-screen h-full p-10">

        <h1 className="text-3xl font-bold text-center">New Arrivals</h1>
        <div id="content">



        </div>


      </div>

    </main>
  );
}
