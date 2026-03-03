import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t border-border bg-card mt-12'>
        <footer className='container-wide py-10 px-4 relative pt-8 flex flex-col justify-center items-center'>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div>
              <h2 className='text-2xl text-primary md:text-start mt-2'>Ramjan Ansari</h2>
              <p className='md:text-start mt-2 text-sm'>I am a passionate Full-Stack MERN Developer with a strong foundation in frontend and backend development, along with scalable system design. I enjoy building secure, high-performance web applications using modern technologies like React, Node.js, Express, and MongoDB.</p>
            </div>

            <div className='my-10' >
              <div className="flex justify-center items-center gap-5  opacity-0 animate-fade-in-delay-5">
                <a href='https://www.linkedin.com/in/ramjan-ansari-426b91315/' className="text-primary border border-gray-700 rounded-full p-3  flex items-center justify-center hover:scale-120 hover:bg-primary card-hover hover:text-white transition hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] duration-300">
                  <Linkedin size={20}  />
                </a>
                <a href='https://github.com/Ramjan-Ansari'  className="text-primary border border-gray-700 rounded-full p-3  flex items-center justify-center hover:scale-120 hover:bg-primary card-hover  hover:text-white transition hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] duration-300">
                  <Github size={20} />
                </a>
              </div>
              <div className='flex gap-8 mt-6 justify-center items-center'>  
                <Link to={'/'} className='hover:text-primary'>Home</Link>
                <Link to={'/skills'} className='hover:text-primary'>Skills</Link>
                <Link to={'/projects'} className='hover:text-primary'>Projects</Link>
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <h2 className='text-xl text-primary'>Currently Learning</h2>
              <div className='flex gap-3 mt-2'>
                {["Next.js", "TypeScript", "System Design"].map((item, idx)=>(
                  <div key={idx} className='mt-6'>
                    <span className='px-3 py-1.5 font-mediam rounded-full bg-primary/20 text-secondary-foreground'> {item} </span>
                  </div>
                ))}
                {/* <span className='px-3 py-1.5 font-mediam flex items-center rounded-full bg-primary/20 text-secondary-foreground'> Next.js</span> */}
              </div>
            </div>
          </div>

            <p className='text-sm text-muted-foreground mt-10 md:mt-6 '> {" "} &copy; {new Date().getFullYear()} Ramjan Ansari, All rights reseved. </p>
            
        </footer>
    </div>
  )
}

export default Footer