"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section>
            <motion.div className='flex items-center justify-center' initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "spring", damping: 5, duration: 0.2, delay: 0.5}}>
                <Image src={'/DHPortraitThumb.jpg'} alt={'DHPortrait'} width="192" height="192" quality='100' priority={true} className='h-[15rem] w-[15rem] rounded-full border-[0.35rem] object-cover' />
            </motion.div>
        </section>
    )
}
