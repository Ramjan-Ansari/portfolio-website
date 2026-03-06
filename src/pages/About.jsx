import React from 'react'
import {Link} from 'react-router-dom'
import {ArrowRight, Briefcase, Code, User} from 'lucide-react'

const About = () => {
  return (
    <div className='py-24 px-2 md:px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center opacity-0 animate-fade-in-delay-1'>About <span className='text-primary'>Me</span></h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center '>

          <div className='space-x-1 md:space-x-6 opacity-0 animate-slide-right'>
            <h3 className='text-2xl font-semibold '>Passinate Web Devloper</h3>

            <p className='text-muted-foreground mt-8 text-justify'>Strong expertise in frontend–backend integration, with hands-on experience debugging and optimizing UI, APIs, authentication flows, and database operations.</p>

            <p className='text-muted-foreground mt-6 text-justify'>Experienced in designing scalable application architecture with clean code principles and performance optimization.</p>
            <p className='text-muted-foreground mt-6 text-justify '>Strong problem-solving mindset with the ability to analyze requirements and deliver efficient, production-ready solutions.</p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center mt-3 '>
              <Link to={'/contact'} className='cosmic-button flex justify-center hover:scale-105 items-center gap-2'>
                Get In Touch <ArrowRight size={16} />
              </Link>
              <Link to={'/projects'} className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all flex gap-2 items-center justify-center  duration-500'> View MY Work <ArrowRight size={16} /> </Link>
            </div>

          </div>

          <div className='grid grid-cols-1 gap-6 opacity-0 animate-slide-left'>

            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Code  className='h-6 w-6 text-primary '/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg '>Web Devlopment</h4>
                  <p className='text-muted-foreground '>Creating responsive Websites and Web applications with modern framworks.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <User  className='h-6 w-6 text-primary '/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg '>UI/UX Design</h4>
                  <p className='text-muted-foreground '>Building seamless, intuitive, and performance-driven user interfaces.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover '>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                  <Briefcase  className='h-6 w-6 text-primary '/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg '>Project Managment</h4>
                  <p className='text-muted-foreground '>Organizing development workflows with focus on deadlines and quality.</p>
                </div>
              </div>
            </div>
            

          </div>

        </div>

      </div>

      <div className="mt-12 px-4 sm:mt-20 text-center opacity-0 animate-fade-in-delay-3">
          <div className="inline-block p-4 sm:p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <h2 className='text-primary text-2xl md:text-3xl pb-3'>Eduction</h2>
            <h4 className='text-muted-foreground font-bold text-lg md:text-xl pb-2'>BCA(Bachelor of Computer Application)</h4>
            <p className="text-muted-foreground font-mediam text-base mb-2">
              Maulana Mazharul Haque Arabic & Persian University
            </p>
            <p>Aug 2023 - May 2026 (Expected)</p>
          </div>
      </div> 


    </div>
  )
}

export default About