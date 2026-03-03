import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExpandIcon, ExternalLink, Github } from 'lucide-react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'


const projects = [
    {
        id: 1,
        title : "Apna Video Call",
        description : "Built a real-time multi-user video conferencing platform supporting live chat and screen sharing, delivering low-latency streaming and a smooth, lag-free user experience.",
        image : project1,
        tags: ["MERN", "Material UI", "Socket.io", "WebRTC(P2P)", "JWT", "CSS3" ],
        demoUrl : "https://apna-video-call-frontend-6bs5.onrender.com/",
        githubUrl : "https://github.com/Ramjan-Ansari/Apna-video-call-MERN-",
    },
    {
        id: 2,
        title : "Forever",
        description : "Engineered a scalable MERN-based e-commerce platform featuring secure JWT authentication, advanced product filtering, admin dashboard with full product CRUD operations, order management system",
        image : project2,
        tags: ["MERN", "Cloudinary", "Stripe", "JWT", "Axios", "Razorpay", "Tailwind CSS"],
        demoUrl : "https://forever-frontend-rosy-eight.vercel.app/",
        githubUrl : "https://github.com/Ramjan-Ansari/Forever-E-Commerce-MERN-Stack-",
    },
    {
        id: 3,
        title : "Wonderlust",
        description : "Developed a travel booking application offering smooth flight booking functionality, secure user authentication, and a dynamic rating system to improve user engagement and credibility.",
        image : project3,
        tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "JWT", "Rest API"],
        demoUrl : "https://wonderlust-dedj.onrender.com/listings",
        githubUrl : "https://github.com/Ramjan-Ansari/Wonderlust",
    },
    {
        id: 4,
        title : "Edusity",
        description : "A responsive React-based educational website with modern UI design and dynamic form integration. Integrated Web3Forms API for seamless contact form submission and improved user experience.",
        image : project4,
        tags: ["React.js", "CSS3", "Web3Forms API"],
        demoUrl : "https://react-frontend-edusity.onrender.com/",
        githubUrl : "https://github.com/Ramjan-Ansari/React-Frontend-Edusity",
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container py-24 px-4 relative'>

        <div className=" mx-auto max-w-5xl opacity-0 animate-fade-in-delay-1">
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>My <span className='text-primary'>Projects</span></h2>
        </div>

        <p className='text-center md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-slide-left'>
            A showcase of my recent projects focused on building innovative, scalable, and high-performance web applications.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-fade-in-delay-2'>
            {projects.map((project, idx)=>(
                <div key={idx} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

                    <div className='h-48  overflow-hidden '>
                        <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'  />
                    </div>

                    <div className='p-6'>
                        <div className='flex flex-wrap gap-2 mb-4 '>
                            {project.tags.map((tag, idx)=>(
                                <span key={idx} className='px-2 py-1 text-sm  rounded-full bg-primary/20 text-secondary-foreground '> {tag} </span>
                            ))}
                        </div>
                    

                        <h3 className='text-xl font-semibold mb-2 '>{project.title}</h3>
                        <p className='text-muted-foreground mb-4 text-sm text-start '>
                            {project.description}
                        </p>

                        <div className='flex justify-between items-center '>
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} target='_blank' className='text-foreground hover:text-primary/80 transition-colors duration-300 flex gap-1 hover:scale-105'>
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                                <a href={project.githubUrl} target='_blank' className='text-foreground hover:text-primary/80 transition-colors duration-300 flex gap-1 hover:scale-105'>
                                    <Github size={20} /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

        <div className='text-center mt-12'>
            <a href='https://github.com/Ramjan-Ansari' target='_blank' className='cosmic-button w-fit flex  items-center mx-auto gap-2 hover:scale-105'>
                Check My GitHub <ArrowRight size={16} />
            </a>
        </div>


    </div>
  )
}

export default Projects