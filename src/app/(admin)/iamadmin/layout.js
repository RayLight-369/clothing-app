import { Inter } from "next/font/google";
import ThemeContext from "@/contexts/ThemeContext";
import "../../globals.css";
import { cn } from "@/lib/utils";
// import ResizeableSidebar from "./_components/ResizeableSidebar";
import SidebarSheet from "./_components/SidebarSheet";
import ChildLayout from "./ChildLayout";
import ClothesContext from "@/contexts/ClothesContext";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter( { subsets: [ "latin" ] } );


export default function RootLayout ( { children } ) {
  return (
    <html lang="en" className="w-screen h-screen overflow-x-hidden">
      <body className={ cn( "w-full h-full", inter.className ) }>
        <ThemeContext
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ClothesContext>
            <section className='h-screen w-screen'>
              {/* <ResizeableSidebar left={ <ChildLayout /> } right={ children } /> */ }
              <div className="h-full w-full flex-col gap-[1px] bg-muted">
                <div id="header" className="h-[70px] bg-background flex justify-between px-8 items-center border-b-2">
                  <h1 className="font-bold text-lg">Admin Panel</h1>
                  <div className="h-full flex items-center gap-1">
                    <ThemeToggle />
                    <SidebarSheet />
                  </div>
                </div>

                <div id="content" className="h-full bg-background p-8">
                  { children }
                </div>
              </div>
            </section>
            <ChildLayout />
          </ClothesContext>
        </ThemeContext>
      </body>
    </html>
  );
}
