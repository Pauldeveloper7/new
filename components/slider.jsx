"use client"
import React from 'react';
import '../styles/slider.scss'
import Link from 'next/link';
import {motion} from'framer-motion';

const slider = () => {

  return (
    <div className='slider'>
        
       
        <motion.p initial={{ x: "100vw" }} // Initially positioned outside the viewport on the right
        animate={{ x: 0 }} // Moves to the center of the viewport
        transition={{ duration: 0.9, type: "spring", stiffness: 40 }} className='poppins-extralight '> Sign up for Best Offers and deals and minblowing Discound</motion.p>
        <motion.button  type="button"   initial={{ x: "100vw" }} // Initially positioned outside the viewport on the right
        animate={{ x: 0 }} // Moves to the center of the viewport
        transition={{ duration: 0.9, type: "spring", stiffness: 40 }} id='signbtn' className='poppins-extralight '>
         <Link href="/signup">SIGN UP</Link>
           </motion.button>
  </div>

  )
}

export default slider