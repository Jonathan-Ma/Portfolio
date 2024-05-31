"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-[1rem] sm:my-[3rem] h-[3rem] w-1 rounded-full' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", damping: 10, duration: 0.2, delay: 0.9 }}></motion.div>
  )
}
