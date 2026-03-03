import { ArrowRight, Book, Github, Linkedin,  Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../assets/photo.jpeg'
import resume from '../assets/resume/Ramjan_FullStack_dev.pdf'

const HeroSection = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <section className="container mx-auto md:mx-32 my-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 my-20">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-start tracking-tight">
              <span className="text-2xl opacity-0 animate-fade-in">Hi, It's Me</span> <br />
              <span className='opacity-0 animate-fade-in'>I'm </span> <span className="text-primary opacity-0 animate-fade-in-delay-1">Ramjan</span><span className='text-primary opacity-0 animate-fade-in-delay-2 ml-2'>Ansari</span>
            </h1>

            <p className="mt-4 text-base text-muted-foreground md:text-lg text-start opacity-0 animate-fade-in-delay-3">
              A passionate Full-Stack Developer building scalable, secure,
               and <br className='hidden md:block' /> high-performance web applications with modern technologies.
            </p>

            {/* Button  */}
            <div className='md:flex md:justify-start'>
              <div className='flex flex-col md:flex-row gap-6 mt-8 opacity-0 animate-fade-in-delay-4 '>
                <Link to={'/projects'} className='cosmic-button bg-primary w-full md:w-fit flex justify-center items-center mx-auto gap-2 hover:scale-105'>
                    View MY Work <ArrowRight size={16} />
                </Link>
                <a href={resume} className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95  transition-all duration-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]'>
                    Download Resume
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6 opacity-0 animate-fade-in-delay-5">
              <a href='https://www.linkedin.com/in/ramjan-ansari-426b91315/'  className="text-primary border border-primary rounded-full p-3  flex items-center justify-center hover:bg-primary hover:text-white transition hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-110 duration-300">
                <Linkedin size={26}  />
              </a>
              <a href='https://github.com/Ramjan-Ansari'  className="text-primary border border-primary rounded-full p-3  flex items-center justify-center hover:bg-primary hover:text-white transition duration-300 hover:scale-110">
                <Github size={26} />
              </a>
              <a href='https://www.linkedin.com/in/ramjan-ansari-426b91315/' className="text-primary border border-primary rounded-full p-3  flex items-center justify-center hover:bg-primary hover:text-white transition duration-300 hover:scale-110">
                <Twitter size={26}/>
              </a>
              
            </div>
          </div>

          {/* Image Section */}
          <div className="w-72 md:w-80 rounded-3xl  hover:rotate-2 transition-transform duration-500 overflow-hidden opacity-0 animate-slide-left">
            <img
              src={photo}
              alt="profile"
              className="w-full max-w-md "
            />
          </div>
        </div>
       
      </section>
    </div>
  )
}

export default HeroSection