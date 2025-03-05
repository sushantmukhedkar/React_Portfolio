import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiJavascript, SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";  
import {animate, motion} from "framer-motion";

const iconVarients =(duration)=>({
  intial :{y: -10},
  animate :{ y : [10,-10],
    transition:{
      duration:duration,
      ease: "linear",
      repeat: Infinity,
      repeatType:"reverse",
    }
  },
});
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0 , y: -100}}
        transition={{ duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies
      </motion.h1>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-6'>

        <motion.div 
            variants={iconVarients(2.5)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-yellow-400'>
          <SiJavascript className='text-7xl text-yellow-400'/>
        </motion.div>

        <motion.div 
            variants={iconVarients(3)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-cyan-400'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>

        <motion.div 
            variants={iconVarients(3.5)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-orange-500'>
          <FaJava className='text-7xl text-[#f89820]'/>
        </motion.div>

        <motion.div
            variants={iconVarients(5)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500'>
          <SiPython className='text-7xl text-[#3776AB]'/>
        </motion.div>

        <motion.div
            variants={iconVarients(3.5)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-blue-700'>
          <SiMysql className='text-7xl text-[#4479A1]'/>
        </motion.div>

        <motion.div 
            variants={iconVarients(4)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-orange-400'>
          <SiScikitlearn className='text-7xl text-[#F7931E]'/>
        </motion.div>

        <motion.div 
            variants={iconVarients(8)}
            intial="intial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-orange-600'>
          <SiTensorflow className='text-7xl text-[#FF6F00]'/>
        </motion.div>

        <motion.div 
              variants={iconVarients(4.5)}
              intial="intial"
              animate="animate"
              className='rounded-2xl border-4 border-neutral-800 p-4 
                        hover:scale-110 transition-transform duration-300 
                        hover:shadow-lg hover:shadow-red-500'>
          <SiPytorch className='text-7xl text-[#EE4C2C]'/>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies;
