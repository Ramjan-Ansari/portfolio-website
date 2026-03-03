import React, { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { cn } from '../lib/util.js';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // default dark (first visit OR stored dark)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
    },[])
    function ToggleTheme() {
        if(isDarkMode){ 
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }
  return (
    <button className={cn( "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", "focus:outline-hidden")}
    onClick={ToggleTheme}> {isDarkMode? (<Sun className='h-6 w-6 text-yellow-300' />) : (<Moon className='h-6 w-6 text-blue-900 ' />) } </button>
  )
}

export default ThemeToggle