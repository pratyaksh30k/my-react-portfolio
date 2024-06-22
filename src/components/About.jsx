import React from 'react'
import aboutImage from '../assets/aboutImg.jpg'
import { ABOUT_TEXT } from '../constants/index.js'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-100 pb-4 lg:mb-36'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='flex items-center justify-center'>
            <img src={aboutImage} alt="About_Image" className='rounded-lg w-[350px] md:w-[300px]'/>
          </motion.div>
        </div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-xl py-6 font-light tacking-tighter'>{ABOUT_TEXT}</p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About
