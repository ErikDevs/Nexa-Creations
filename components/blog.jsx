"use client"
import {useInView } from 'react-intersection-observer'
import {motion , useAnimation }  from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import React from 'react'
import blogImage from '@/public/digitalMarketing.jpg'

const Blog = () => {
  const blogVariant = {
    visible: {opacity: 1, height: "auto"},
    hidden : {opacity: 0, height: "0"}
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
    variants={blogVariant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 2}}id='blog' className='flex-col mt-20'>
        <div className='flex items-center ml-2'>
            <hr className='w-16 gap-2 h-1 mr-2 bg-red-500'/> 
            <h3 className='font-semibold text-lg'> Top Stories </h3>
        </div>
        <h1 className='text-2xl mt-8 font-bold mx-2 mb-5'>Our Latest Blogs </h1>
        
        <div className='md:flex mx-4'>
            <Image className='md:w-[30%] mr-5' src= {blogImage} alt='blog-image' />
            <div className='flex-col'>
                <h3 className='text-2xl font-bold'>Most in-Demand Graphic Design Skills in 2023</h3>
                <p className='text-red-500 text-sm font-light'>November 2023</p>
                <p className='text-gray-500 text-lg'>What Are The Most In-Demand Skills in Graphic Design. <br /> The best Graphic Design Skills you should Learn in 2023.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Blog