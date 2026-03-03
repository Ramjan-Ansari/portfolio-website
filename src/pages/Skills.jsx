import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiMui, SiJavascript, SiWebrtc, SiThunderstore, SiHoppscotch, SiGraphql, SiRedux } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiDatabase2Line, RiVercelFill, RiVercelLine } from 'react-icons/ri';
import { BsTools, BsDatabase, BsBox } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const SkillCategory = ({ title, icon: Icon, skills, description }) => {
  return (
    <div className="container mb-12 sm:mb-16 bg-transparent rounded-2xl p-4 sm:p-8 border border-gray-700/50 backdrop-blur-sm opacity-0 animate-slide-left">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="p-2 sm:p-3 rounded-xl bg-indigo-500/20">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-700" />
        </div>

        <div className='flex flex-col items-start'>
          <h3 className="text-xl sm:text-2xl font-bold  bg-clip-text text-primary">
            {title}
          </h3 >
          <p className="text-sm text-muted-foreground sm:text-base mt-1 text-start">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ icon: Icon, name, level, color }) => {
  const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      let current = 0;
  
      const timer = setInterval(() => {
        if (current >= level) {
          clearInterval(timer);
        } else {
          current += 1;
          setProgress(current);
        }
      }, 15); // speed control
  
      return () => clearInterval(timer);
    }, [level]);

  return (
    <div className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className={`p-2 sm:p-3 rounded-xl ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-base sm:text-lg text-start font-semibold text-white hover:text-primary transition-colors duration-300">{name}</h3>
          <div className="mt-2 sm:mt-3">
            <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-1">
              <span>Proficiency</span>
              {/* <span>{level}%</span> */}
              <span>{progress}%</span>
            </div>
            <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${color}`}  style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { icon: FaReact, name: 'React.js', level: 90, color: 'bg-blue-500' },
    { icon: SiJavascript, name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
    { icon: FaCss3Alt, name: 'CSS', level: 95, color: 'bg-blue-600' },
    { icon: FaBootstrap, name: 'Bootstrap', level: 80, color: 'bg-purple-600' },
    { icon: SiMui, name: 'Material-ui', level: 70, color: 'bg-indigo-500' },
    { icon: FaHtml5, name: 'HTML', level: 95, color: 'bg-orange-500' },
    { icon: SiNextdotjs, name: 'Next.js', level: 70, color: 'bg-black' },
    { icon: SiRedux, name: 'Redux Toolkit', level: 85, color: 'bg-purple-600' },
  ];

  const backendSkills = [
    { icon: FaNodeJs, name: 'Node.js', level: 85, color: 'bg-green-500' },
    { icon: SiExpress, name: 'Express.js', level: 90, color: 'bg-gray-500' },
    { icon: RiDatabase2Line, name: 'REST APIs', level: 90, color: 'bg-blue-500' },
    { icon: SiSocketdotio, name: 'Socket.io', level: 80, color: 'bg-black' },
    { icon: SiWebrtc, name: 'WebRTC', level: 80, color: 'bg-emerald-500' },
    { icon: SiGraphql, name: 'GraphQL', level: 80, color: 'bg-pink-600' },
  ];

  const databaseSkills = [
    { icon: SiMongodb, name: 'MongoDB', level: 90, color: 'bg-green-600' },
  ];

  const toolsSkills = [
    { icon: BsTools, name: 'Cloudinary', level: 85, color: 'bg-yellow-500' },
    { icon: RiVercelLine, name: 'Vercel', level: 85, color: 'bg-black' },
    { icon: FaGitAlt, name: 'Git', level: 90, color: 'bg-orange-600' },
    { icon: FaGithub, name: 'GitHub', level: 90, color: 'bg-gray-900' },
    { icon: SiThunderstore, name: 'Thunder Client', level: 85, color: 'bg-purple-500' },
    { icon: SiHoppscotch, name: 'Hoppscotch', level: 80, color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in-delay-1">
            Technical <span className='text-primary'>Skills</span>
          </h2>
          <p className="text-center md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            A comprehensive showcase of my technical expertise and proficiency across various domains
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <SkillCategory
            title="Frontend Development"
            icon={FaReact}
            skills={frontendSkills}
            description="Modern frontend technologies and frameworks for building responsive and interactive user interfaces"
          />

          <SkillCategory
            title="Backend Development"
            icon={FaNodeJs}
            skills={backendSkills}
            description="Server-side technologies and APIs for building robust and scalable applications"
          />

          <SkillCategory
            title="Databases"
            icon={RiDatabase2Line}
            skills={databaseSkills}
            description="Various database technologies for efficient data storage and management"
          />

          <SkillCategory
            title="Tools & Platforms"
            icon={BsTools}
            skills={toolsSkills}
            description="Essential tools and platforms that enhance development workflow and capabilities"
          />
        </div>

        <div className="mt-12 sm:mt-20 text-center">
          <div className="inline-block p-4 sm:p-6 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <p className="text-sm text-muted-foreground sm:text-lg">
              Along with the MERN stack, I have a strong foundation in Java and Data Structures & Algorithms, with a problem-solving mindset.            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;