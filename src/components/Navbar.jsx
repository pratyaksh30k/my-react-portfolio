import React from 'react'
import logo from "../assets/pkfinallogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className=' mb-8 flex justify-between items-center py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt='' className='h-10 w-10 cursor-pointer m-8'/>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a target="_blank" href="https://www.linkedin.com/in/pratyaksh-kothari/"><FaLinkedin className='cursor-pointer'/></a>
        <a target="_blank" href="https://github.com/pratyaksh30k"><FaGithub className='cursor-pointer'/></a>
        <a target="_blank" href="https://www.instagram.com/"><FaInstagram className='cursor-pointer'/></a>
      </div>
    </nav>
  )
}

export default Navbar
