"use client";

import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"



type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex flex-row justify-between max-w-7xl mx-auto">
        <motion.div 
        initial ={{
            x:-500,
            opacity: 0,
            scale: 0.5,
        }}
        animate ={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        className="flex flex-row">
            {/*Social Icons*/}
            <SocialIcon url="https://linkedin.com/harsha-jagadish" 
            fgColor="gray"
            bgColor="transparent"
            />

            <SocialIcon url="https://linkedin.com/harsha-jagadish" 
            fgColor="gray"
            bgColor="transparent"
            />

            <SocialIcon url="https://linkedin.com/harsha-jagadish" 
            fgColor="gray"
            bgColor="transparent"
            />

            <SocialIcon url="www.outlook.com"
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
            />

        </motion.div>

    </header>
  );
}