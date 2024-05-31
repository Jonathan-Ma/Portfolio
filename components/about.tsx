"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className='text-center'>
            <motion.p className='flex flex-wrap w-[15rem] sm:w-[40rem] sm:text-2xl font-medium justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 1.0 }}>
                <span className='font-bold text-l sm:text-5xl'>About me</span>
                <br />Welcome to the junkyard of my mind! Here, you&apos;ll find a mishmash of everything that goes on in my mind and projects that I have worked on and also WIP.
            </motion.p>
        </section>
  )
}
