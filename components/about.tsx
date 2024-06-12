"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className='flex w-screen h-screen items-center justify-center bg-neutral-400 relative bg-gradient-to-b from-black to-transparent'>
      <section className='text-center' id="about">
        <motion.div className='flex items-center justify-center mb-[2rem]' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.5 }}>
          <Image src={'/DHPortraitThumb.jpg'} alt={'DHPortrait'} width="192" height="192" quality='100' priority={true} className='h-[8rem] w-[8rem] sm:h-[12rem] sm:w-[15rem] rounded-full border-[0.35rem] object-cover' />
        </motion.div>
        <motion.p className='flex flex-wrap w-[15rem] sm:w-[40rem] sm:text-2xl font-medium justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 1.0 }}>
          <span className='font-bold text-l sm:text-5xl'>About me</span>
         
          I&apos;m Jonathan, a CS graduate from the University of Hawaii. I've spent time living in Georgia, China, and Hawaii, which has been a great experience!
        </motion.p>
      </section>
    </div>
  )
}
