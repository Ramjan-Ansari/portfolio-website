import React, { useEffect, useState } from 'react'
import { cn } from '../lib/util.js'
import { Link, NavLink } from 'react-router-dom';
import { X, Menu } from "lucide-react"
import ThemeToggle from './ThemeToggle.jsx';


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10 );
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  })
  return (
    <div>
      <nav className={cn("sticky top-0 w-full z-40 transition-all duration-300", isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
        <div className="container-wide flex items-center justify-between">
          <Link to={'/'} className='text-xl md:text-2xl font-bold text-primary flex items-center '>
            <span className='relative z-50 opacity-0 animate-slide-right'>
              <span className='text-glow text-foreground'>Ramjan </span>Ansari
            </span>
          </Link>

          {/* desktop nav  */}
          <ul className='hidden md:flex space-x-8 opacity-0 animate-fade-in-delay-1'>
            <NavLink to={'/'} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center flex-col'>
              <h1>Home</h1>
              <hr className='w-2/4 border-none h-[1.07px] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/skills'} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center flex-col'>
              <h1>Skills</h1>
              <hr className='w-2/4 border-none h-[1.07px] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/projects'} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center flex-col'>
              <h1>Projects</h1>
              <hr className='w-2/4 border-none h-[1.07px] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/about'} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center flex-col'>
              <h1>About</h1>
              <hr className='w-2/4 border-none h-[1.07px] bg-primary hidden' />
            </NavLink>

            <NavLink to={'/contact'} className='text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center flex-col'>
              <h1 >Contact</h1>
              <hr className='w-2/4 border-none h-[1.07px] bg-primary hidden' />
            </NavLink>
          </ul>

          {/* mobile nav  */}
          <button onClick={()=> setIsMenuOpen((prev)=>!prev)} 
          className='md:hidden p-2 text-foreground z-50'
          aria-level={isMenuOpen? "Close Menu" : "Open Menu"}
          > 
            {isMenuOpen? <X size={24} /> : <Menu size={24} /> } 
          </button>

          <div className={cn("fixed inset-0 bg-background/95 background-blur-md z-30 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden ",
            isMenuOpen? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}>
            <div className='flex flex-col space-y-8 text-xl'>
              <NavLink onClick={()=>setIsMenuOpen(false)} to={'/'}>Home</NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to={'/skills'}>Skills</NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to={'/projects'}>Projects</NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to={'/about'}>About</NavLink>
              <NavLink onClick={()=>setIsMenuOpen(false)} to={'/contact'}>Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar