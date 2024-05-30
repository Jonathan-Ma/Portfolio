"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section className='text-center max-w-[40rem]'>
            <motion.div className='flex items-center justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.5 }}>
                <Image src={'/DHPortraitThumb.jpg'} alt={'DHPortrait'} width="192" height="192" quality='100' priority={true} className='h-[10rem] w-[10rem] rounded-full border-[0.35rem] object-cover' />
            </motion.div>
            <motion.p className='flex flex-wrap sm:text-2xl font-medium pt-[3rem] justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.7 }}>
                <span className='font-bold text-5xl'>Hi there!</span>
                <br />Welcome to the junkyard of my mind! Here, you'll find a mishmash of tech projects, philosophical ramblings, and everything in between. I'm your host, Jonathan.
            </motion.p>
        </section>
    )
}