import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"
import { FaGithub } from 'react-icons/fa';


const Projects = () => {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
        <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0 , y: -100}}
            transition={{ duration:0.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((projects,index) => (
                <div key ={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0 , x: -100}}
                        transition={{ duration:1}}
                        className='w-full lg:w-1/4'>
                        <img 
                        src={projects.image}
                        height={150}
                        width={150}
                        alt={projects.title}
                        className='mb-6 rounded' />
                    </motion.div>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0 , x: 100}}
                        transition={{ duration:0.5}}
                        className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{projects.title}</h6>
                        <p className='mb-4 text-neutral-400'>{projects.description}</p>
                        {projects.technologies.map((tech,index)=>(
                            <span 
                            key={index} 
                            className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                                {tech}                                
                            </span>
                        ))}

                        {projects.githubLink && (
                            <a 
                                href={projects.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='mt-4 inline-flex items-center text-white hover:text-purple-600'>
                                <FaGithub className='mr-2' /> GitHub
                            </a>
                        )}    
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects