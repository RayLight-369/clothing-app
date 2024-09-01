import { Inter } from "next/font/google";
import ThemeContext from "@/contexts/ThemeContext";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import ChildLayout from "./ChildLayout";
import Config from "@/contexts/Config";

const inter = Inter( { subsets: [ "latin" ] } );


export const metadata = {
  title: "Amuler: A Clothing Brand.",
  description: "Everything you are looking for...",
};

export default function RootLayout ( { children } ) {
  return (
    <html lang="en" className="w-screen h-screen overflow-x-hidden">
      <body className={ cn( "w-full h-full", inter.className ) }>
        <ThemeContext
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <Config>
            <ChildLayout>
              { children }
            </ChildLayout>
          </Config>
        </ThemeContext>
      </body>
    </html>
  );
}
