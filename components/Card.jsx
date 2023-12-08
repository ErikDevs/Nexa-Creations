"use client"
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {motion, useAnimation } from "framer-motion"

const Card = ({title, body, icon, href}) => {
  const cardVariant = {
    visible: {opacity: 1, y: 0},
    hidden : {opacity: 0, y: 50}
 }

 const control = useAnimation()
 const [ref, inView] = useInView()

 useEffect(() => {
   if(inView) {
     control.start("visible")
     control.start("height")
   } else {
     control.start("hidden")
   }
 }, [control, inView]);
  return (
        <motion.div ref={ref}
        variants={cardVariant}
        initial = "hidden"
        animate = {control}
        transition={{duration: 0.5}} id= {href} className='flex flex-col justify-center items-center hover:bg-white hover:drop-shadow-2xl px-8 py-10'>
        <i className='bg-red-500 text-white px-2 py-2 rounded-md mb-8'>{icon}</i>
         <h2 className='text-center text-2xl font-semibold'>{title}</h2>
         <p className='text-center text-sm mt-2'>{body}</p>
    </motion.div>
  )
}

export default Card