"use client";

import { NavLinks } from '@/lib/constants';
import CustomLink from './CustomLink';
import { Search, UserRound } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {

  const [ src, setSrc ] = useState( "/logo1.png" );

  return (
    <header className='w-screen fixed flex items-center px-8 py-[10px] h-[80px] justify-between text-sm font-[Alata] bg-background z-[42]'>
      <div className="logo h-full flex items-center ">
        {/* <p className="logo text-lg font-bold">AMULER</p> */ }
        <Image src={ src || "/logo1.png" } width={ 200 } height={ 120 } className={ "h-full w-auto" } onClick={ () => setSrc( prev => {
          if ( prev.includes( "logo1" ) ) return "/logo2.png";
          return "/logo1.png";
        } ) } />
      </div>
      <nav className='flex items-center gap-5'>
        { NavLinks.map( ( link, i ) => (
          <CustomLink key={ i } href={ link.href } className={ `hidden md:block py-1 px-1 relative before:transition-[transform] before:origin-right hover:before:origin-left before:duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1.3px] before:bg-foreground before:-z-10 before:scale-x-0 hover:before:scale-x-100` } active={ "before:!scale-100" }>{ link.label }</CustomLink>
        ) ) }
      </nav>
      <div className='tools flex items-center justify-center gap-5'>
        <div className='relative theme flex gap-2 items-center'>
          <ThemeToggle />
        </div>
        <div className='search flex gap-1 items-center'>
          <Search className='text-foreground' />
          <input type="text" className='p-1 bg-background border-0 w-full md:w-14 outline-none text-sm transition-all duration-250 placeholder:text-foreground md:focus:w-[200px] border-border focus:border-b' placeholder='Search' />
        </div>
        <div className='hidden md:flex login gap-2 items-center'>
          <UserRound className='text-foreground' />
          <p className="label">Search</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;