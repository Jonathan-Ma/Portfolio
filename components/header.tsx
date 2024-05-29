"use client";
import { links } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Header() {
  return (
    <header className='z-[999] relative'>
      <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full border backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full" initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}><ul className="flex text-[0.9rem] h-full justify-center items-center font-medium text-white gap-3 flex-wrap md:flex-nowrap">
          {
            links.map(link => (
              <motion.li className="py-1 px-2" key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}>
                <Link className="justify-center items-center hover:text-rose-400" href={link.hash}>
                  {link.name}
                </Link>
              </motion.li>
            ))
          }
        </ul>
      </motion.div>
    
    </header >
  )
}
