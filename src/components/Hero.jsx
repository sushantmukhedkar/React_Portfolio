import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilepic from '../assets/kevinRushProfile.png';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

// Resume file import (make sure to place your resume in the assets folder)
import resumePDF from '../assets/Sushant_Mukhedkar.pdf';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

const Hero = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Sushant_Mukhedkar_Resume.pdf';
        link.click();
    };

    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-12 lg:mt-20'>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-thin tracking-tight text-center lg:text-left'>
                            Sushant Mukhedkar
                        </motion.h1>

                        {/* Typing Effect */}
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 
                                       to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent 
                                       mt-8 sm:mt-10 lg:mt-12'>
                                        I am{" "}
                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer', 
                                    2000,                 
                                    '',                   
                                    1000,                 
                                    'Machine Learning Enthusiast', 
                                    2000,                 
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='tracking-tighter max-w-xl  
                                       mt-6 sm:mt-8 lg:mt-10 text-xl lg:text-xl font-light text-justify leading-relaxed'>
                            {HERO_CONTENT}
                        </motion.p>

                       
                        <motion.button
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                onClick={handleResumeDownload}
                                className='mt-6 px-4 py-2 sm:px-6 sm:py-3 w-full sm:max-w-[300px] 
                                           bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                                           text-white rounded-lg hover:bg-gradient-to-l 
                                           transition-all duration-300 ease-in-out 
                                           transform hover:scale-105 focus:outline-none
                                           text-base sm:text-lg
                                           flex items-center justify-center 
                                           mx-auto lg:mx-0 lg:mr-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className="h-5 w-5 mr-2 sm:h-6 sm:w-6" 
                                     fill="none" 
                                     viewBox="0 0 24 24" 
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download Resume
                        </motion.button>
                    </div>
                </div>
                
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className='rounded-2xl'
                            src={profilepic}
                            alt="Sj"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
