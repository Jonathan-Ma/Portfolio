"use client";
import { links } from "@/lib/data";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <header className='z-[999] relative'>
      <motion.div
        className="flex fixed top-0 left-1/2 justify-center h-[4rem] w-full border backdrop-blur-[0.2rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        style={{
          //backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fallback for browsers that do not support backdrop-filter
          backdropFilter: 'blur(0.5rem)',
          WebkitBackdropFilter: 'blur(0.5rem)', // Ensure support for Webkit browsers
        }}
      >
        <ul className="flex text-[0.9rem] h-full justify-center items-center font-medium text-white sm:gap-3 flex-wrap md:flex-nowrap">
          {
            links.map(link => (
              <motion.li className="relative flex py-1 px-4" key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <Link className="justify-center items-center"
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}>
                  {link.name}
                  {
                    link.name === activeSection && (<span className="bg-rose-400 rounded-full absolute inset-0 -z-10"></span>)
                  }
                  
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </motion.div>
    </header >
  )
}
