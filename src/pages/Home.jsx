import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import Navbar from '../component/Navbar'
import Skills from './Skills.jsx'

import HeroSection from '../component/HeroSection.jsx'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle  */}
      <div className='hidden lg:block'>

      <ThemeToggle />
      </div>

      {/* Navbar  */}
      {/* <Navbar /> */}
      <HeroSection />
    </div>
  )
}

export default Home