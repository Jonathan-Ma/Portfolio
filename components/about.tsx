"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import '/styles/Starfield.scss'
import '/app/globals.css'

export default function About() {
  return (
    <div className='flex w-screen h-screen justify-center relative'>
      
      <section className='text-center z-10 pt-[10rem]' id="about">
        <motion.div className='flex items-center justify-center mb-[2rem]' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.5 }}>
          <Image src={'/DHPortraitThumb.jpg'} alt={'DHPortrait'} width="192" height="192" quality='100' priority={true} className='h-[8rem] w-[8rem] sm:h-[12rem] sm:w-[15rem] rounded-full border-[0.35rem] object-cover' />
        </motion.div>
        <motion.p className='flex flex-wrap w-[15rem] sm:w-[40rem] sm:text-xl font-medium justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 1.0 }}>
          <span className='font-bold text-l sm:text-5xl pb-8'>About me</span>
         
          I am Jonathan! A recent graduate from the University of Hawaii with experience in embedded systems, full-stack development, and Android applications. While I am proud of my breadth of experiences, I now seek to specialize deeply in a focused domain. My goal is to join a company and commit long-term so I can focus on personal growth while taking ownership and driving the companies success.
        </motion.p>
      </section>
      <div className='starfield-container'>
        <div className='stars'></div>
      </div>
    </div>
  )
}
