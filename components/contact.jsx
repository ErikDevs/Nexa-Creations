"use client"
import { conatct } from '@/constants/constants'
import {useInView } from 'react-intersection-observer'
import {useAnimation, motion } from 'framer-motion'
import { CheckBox } from '@mui/icons-material'
import React, {useEffect} from 'react'

const Contact = () => {

  const priceVariant = {
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
    <motion.div
    ref={ref}
    variants={priceVariant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 1}}
    id='contact' className='flex mt-16 items-center justify-center'>
        <div className='flex-col'>
            <div className='flex justify-center'>
            <CheckBox className='text-red-500 text-md mr-2'/>
            <h3 className='text-center'>Get in Touch with us</h3>
            </div>
            <h1 className='text-4xl text-center font-bold mt-4'>Contact Us Today</h1>
            <div className='md:flex justify-left mt-10'>
            {conatct.map(contactInfo => (
                <div key={contactInfo.key} className='flex p-10 hover:bg-white md:justify-center items-center hover:drop-shadow-lg'>
                    <i className='mr-2 bg-blue-600 rounded-lg px-2 py-2'>{contactInfo.icon}</i>
                    <h3 className='text-lg'>{contactInfo.name}</h3>
                </div>
            ))}
            </div>
            
     </div>
       
    </motion.div>
  )
}

export default Contact