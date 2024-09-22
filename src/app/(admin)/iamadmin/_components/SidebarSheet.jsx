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
            <Link href={ "/iamadmin/dashboard" } className={ cn( 'flex rounded-lg relative group items-center w-full max-w-full gap-5 hover:bg-muted px-6 py-3', pathName.includes( "dashboard" ) ? "bg-muted" : "" ) }>
              <p className='relative text-sm'>Dashboard</p>
              <ChevronRight className='absolute right-6 translate-x-[30px] invisible p-[2px] opacity-0 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100' />
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
