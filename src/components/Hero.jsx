import React from 'react'
import {HERO_CONTENT} from '../constants/index.js'
import profile from '../assets/Profile.jpg'
import {motion} from 'framer-motion'


const container = (delay) => ({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,transition:{duration:0.5,delay:delay}},
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-100 pb-16 lg:pb-36 lg:mb-36'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className='pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Pratyaksh Kothari</motion.h1>
            <motion.span variants={container(1)} initial="hidden" animate="visible" className='bg-gradient-to-r from-[#117aca] to-[#609ae6] bg-clip-text text-4xl tracking-tight text-transparent'>FrontEnd Developer</motion.span>
            <motion.p variants={container(1.5)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tacking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center rounded-lg'>
            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1.5,delay:1.2}} src={profile} alt='profile' className='w-[350px] rounded-lg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
