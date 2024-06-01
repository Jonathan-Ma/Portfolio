"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section className='text-center mt-20 sm:mt-10'>
            <motion.div className='flex items-center justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.5 }}>
                <Image src={'/DHPortraitThumb.jpg'} alt={'DHPortrait'} width="192" height="192" quality='100' priority={true} className='h-[8rem] w-[8rem] sm:h-[12rem] sm:w-[15rem] rounded-full border-[0.35rem] object-cover' />
            </motion.div>
            <motion.p className='flex flex-wrap w-[15rem] sm:w-[40rem] sm:text-2xl font-medium pt-[1rem] justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.7 }}>
                <span className='font-bold text-2xl sm:text-5xl'>Hi there!</span>
                <br />Welcome to the junkyard of my mind! Here, you&apos;ll find a mishmash of everything that goes on in my mind and projects that I have worked on and also WIP.
            </motion.p>
        </section>
    )
}
