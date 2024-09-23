import { Inter } from "next/font/google";
import ThemeContext from "@/contexts/ThemeContext";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import ChildLayout from "./ChildLayout";
import Config from "@/contexts/Config";
import ClothesContext from "@/contexts/ClothesContext";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
  title: 'Safar: A Clothing Brand.',
  description: `Safar's the place for clothes every day, hoodies, shirts, and more in your way, step into style and start today.`,
  icons: "https://safarclothing.store/favicon.ico",
  openGraph: {
    title: 'Safar: A Clothing Brand',
    siteName: 'Safar',
    url: 'https://safarclothing.store/',
    description: `Safar's the place for clothes every day, hoodies, shirts, and more in your way, step into style and start today.`,
    type: 'website',
    images: [
      {
        url: 'https://safarclothing.store/safar_card.jpeg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
      },
      {
        url: 'https://safarclothing.store/favicon.ico',
        width: 32,
        height: 32,
        type: 'image/x-icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ 'https://safarclothing.store/safar_card.jpeg' ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FF8D08' },
    { media: '(prefers-color-scheme: dark)', color: '#FF8D08' }, // Optional: You can define dark theme colors
  ],
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
          <ClothesContext>
            <Navbar />
            <Config>
              <ChildLayout>
                { children }
              </ChildLayout>
            </Config>
          </ClothesContext>
        </ThemeContext>
      </body>
    </html>
  );
}
