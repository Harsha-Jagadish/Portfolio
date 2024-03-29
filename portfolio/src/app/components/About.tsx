"use client";

import React from 'react'
import {motion} from "framer-motion";
import { PageInfo } from '../../../typings';
import { urlFor } from '../../../sanity/sanity';
import Image from 'next/image';
import { useFetchProps } from '@/types';

type Props = {
   pageInfo: PageInfo
}

function About() {
   const { pageInfo} = useFetchProps();

   console.log(pageInfo?.heroImage);
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
         </h3>

         {pageInfo?.profilePic && (
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
         src={urlFor(pageInfo?.profilePic).url()}
         //src="/8EED7209-E75A-45E4-9007-C1A891918B9B_1_105_c.jpeg"
         className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-90 xl:w-[500px] xl:h-[600px]"
         />
         )}

         <div className ="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "} 
                <span className="underline decoration-[#F7AB0A]/50"> little</span>{" "} 
                background 
            </h4>
            <p className="mb-20 md:mb-0-text-small">
            {pageInfo?.backgroundInformation}
            </p>
        </div> 
     </motion.div>
  )
}

export default About