"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import { NavLinks } from "../constants";

export default function SidebarSheet () {

  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Joined Users</SheetTitle>
          <SheetDescription>
            <div className="relative top-3 flex flex-col gap-2">
              { NavLinks.map( ( route, i ) => (
                <Link href={ route.path } key={ i } className={ cn( 'flex rounded-lg relative group items-center w-full max-w-full gap-5 transition-colors hover:bg-muted px-6 py-3', pathName.includes( route.name.toLowerCase() ) ? "bg-muted" : "" ) }>
                  <p className='relative text-sm'>{ route.name }</p>
                  <ChevronRight className='absolute right-6 translate-x-[30px] invisible p-[2px] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100' />
                </Link>
              ) ) }
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
