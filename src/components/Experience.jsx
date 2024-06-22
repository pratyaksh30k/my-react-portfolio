import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-100 pb-4">
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Experience</motion.h1>
      <div>
        {EXPERIENCES.map((exp, ind) => (
          <div key={ind} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-sky-800">{exp.company}</span>
              </h6>
              <p className="mb-4 text-neutral-700">{exp.description}</p>
              {exp.technologies.map((tech,i)=>(
                <span key={i} className="inline-block mr-2 mt-4 rounded-full border border-sky-800 bg-sky-50 px-2 py-1 text-xs sm:text-sm font-medium text-sky-800">
                {tech}
              </span>
              
              
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
