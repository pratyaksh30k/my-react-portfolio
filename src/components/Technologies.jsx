import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import {motion} from 'framer-motion'

const iconVariants = (duration) =>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-100 pb-36 lg:mb-36">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-400 p-4">
          <RiReactjsLine className="text-7xl text-black"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-400 p-4">
          <TbBrandJavascript className="text-7xl text-black"/>
        </motion.div>
        <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-400 p-4">
          <RiTailwindCssFill className="text-7xl text-black"/>
        </motion.div>
        <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-400 p-4">
          <SiRedux className="text-7xl text-black"/>
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-2 border-neutral-400 p-4">
          <FaGithub className="text-7xl text-black"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
