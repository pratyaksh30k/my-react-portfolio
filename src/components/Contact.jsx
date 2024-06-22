import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className=' border-slate-100'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1}} className=' text-center text-4xl text-white'>Get in Touch</motion.h2>
      <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-50}} transition={{duration:1}} className='text-center tracking-tighter text-gray-400'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href="#" className='border-b border-gray-200'>{CONTACT.email}</a>
      </motion.div>
    </div>
  )
}

export default Contact
