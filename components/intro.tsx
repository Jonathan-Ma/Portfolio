"use client";
import React from 'react'

import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <div className='flex text-center h-screen items-center'>
            <section>
                <motion.p className='flex flex-wrap sm:w-[40rem] sm:text-2xl font-medium justify-center' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.7 }}>
                    <span className='font-bold text-2xl sm:text-5xl'>Hi there!</span>
                    <br />
                        Welcome to the junkyard of my mind! Here, you&apos;ll find a mishmash of everything that goes on in my mind and projects that I have worked on and also WIP.
                    <br />
                    <br />
                    <span>
                        PS: I&apos;m working on this website too! so come back often and check to see if it's updated :&#41;
                    </span>
                </motion.p>
            </section>
        </div>
    )
}
