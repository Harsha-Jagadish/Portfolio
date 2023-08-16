"use client";

import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
         </h3>

         <motion.img 
         initial={{
            x: -200
            //opacity: 0,
         }}
         transition={{
            duration: 1.2
         }}
         whileInView={{
            //opacity: 1, 
            x:0
         }}
         src="/8EED7209-E75A-45E4-9007-C1A891918B9B_1_105_c.jpeg"
         className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-90 xl:w-[500px] xl:h-[600px]"
         />

         <div className ="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "} 
                <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "} 
                background 
            </h4>
            <p className="mb-20 md:mb-0-text-small">
            I'm an international student, furthering my academic pursuits at Simon Fraser University BC, Canada. I am specializing in Computing Science complemented by a minor in Business. To enhance my entrepreneurial skills and embrace the innovation landscape, I have also undertaken a certificate in Entrepreneurship. As I approach my graduation at the end of 2023, I reflect on how this journey has equipped me with a robust foundation in software development, while also instilling in me the essential business acumen required for effective project management and interdisciplinary collaboration. Beyond the confines of the classroom, I am extremely passionate about football, gaming and dedicating regular time to fitness. These hobbies not only allow me to maintain a balanced lifestyle but also serve as a source of inspiration, discipline, and creativity, vital traits that I bring to every professional endeavor
            </p>
        </div> 
     </motion.div>
  )
}

export default About