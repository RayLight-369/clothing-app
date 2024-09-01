"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle () {
  const { setTheme } = useTheme();
  const [ open, setOpen ] = useState( false );

  // Prevent the page from re-rendering before the theme is mounted
  // useEffect( () => {
  //   setMounted( true );
  // }, [] );

  // if ( !mounted ) return null;

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={ () => setTheme( "light" ) }>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={ () => setTheme( "dark" ) }>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={ () => setTheme( "system" ) }>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="relative font-sans">
      <div>
        <Button variant="outline" size="icon" onClick={ () => setOpen( prev => !prev ) }>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
      <AnimatePresence mode="wait">
        { open && (
          <motion.div className="absolute top-full right-0 min-w-32 bg-background border p-1 rounded-md flex flex-col">
            <button className="text-left border-none outline-none px-3 py-2 bg-popover text-foreground transition-all rounded-md hover:bg-muted focus:bg-accent" onClick={ () => {
              setTheme( "light" );
              setOpen( false );
            } }>Light</button>
            <button className="text-left border-none outline-none px-3 py-2 bg-popover text-foreground transition-all rounded-md hover:bg-muted focus:bg-accent" onClick={ () => {
              setTheme( "dark" );
              setOpen( false );
            } }>Dark</button>
            <button className="text-left border-none outline-none px-3 py-2 bg-popover text-foreground transition-all rounded-md hover:bg-muted focus:bg-accent" onClick={ () => {
              setTheme( "system" );
              setOpen( false );
            } }>System</button>
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  );
}
