import { NavLinks } from '@/lib/constants';
import CustomLink from './CustomLink';
import { Search, UserRound } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className='w-screen fixed flex items-center px-8 py-4 justify-between text-sm font-[Alata] bg-background'>
      <div className="logo w-20 h-8">
        <p className="logo text-lg font-bold">AMULER</p>
      </div>
      <nav className='flex items-center gap-5'>
        { NavLinks.map( ( link, i ) => (
          <CustomLink key={ i } href={ link.href } className={ `py-1 px-1 relative before:transition-[transform] before:origin-right hover:before:origin-left before:duration-300 before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1.3px] before:bg-button before:-z-10 before:scale-x-0 hover:before:scale-x-100` } active={ "before:!scale-100" }>{ link.label }</CustomLink>
        ) ) }
      </nav>
      <div className='tools flex items-center justify-center gap-8'>
        <div className='relative theme flex gap-2 items-center'>
          <ThemeToggle />
        </div>
        <div className='search flex gap-1 items-center'>
          <Search className='text-foreground' />
          <input type="text" className='p-1 bg-none border-0 w-14 outline-none text-sm transition-all duration-250 placeholder:text-foreground focus:w-[200px] border-border focus:border-b' placeholder='Search' />
        </div>
        <div className='login flex gap-2 items-center'>
          <UserRound className='text-foreground' />
          <p className="label">Search</p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;