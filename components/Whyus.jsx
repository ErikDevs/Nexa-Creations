"use client"
import { testimonial } from "@/constants/constants"
import { useEffect } from "react";
import Image from "next/image"
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CheckIcon from '@mui/icons-material/Check';
import DigitalImage from '@/public/digitalMarketing.jpg'
import {useInView } from 'react-intersection-observer'
import {motion, useAnimation } from "framer-motion"

const Whyus = () => {

  const whyVariant = {
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
    variants={whyVariant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 1}}
    className='flex mt-10'>
           <Image src={DigitalImage} className="hidden md:flex" width={800}  alt="banner" />
           <div className='md:ml-4'>
           <div className="flex"><CardMembershipIcon className="text-red-500 mr-4 text-md" /> <h3>Why Us</h3></div>
            <h1 className="md:text-4xl text-3xl mt-2 font-bold mx-2">
                We do a 360 Degree Digital Marketing Approach
            </h1>
            <p className="mx-2 leading-relaxed">
              Experience comprehensive 360-degree digital marketing that transforms brands.
              From captivating content to strategic SEO and ROI optimization, we redefine your online success.
              Elevate your brand with Nexa Creations today.
            </p>
            {testimonial.map(test => (
                <div key={test.key} className="flex items-center justify-center mx-4">
                    <div className="">
                    <i className="bg-red-500 px-3 rounded-md py-3 mr-4">
                        <CheckIcon className="text-white text-4xl font-bold" />
                    </i>
                    </div>
                    <div className="flex-col mt-4">
                    <h2 className="text-xl font-bold">{test.title}</h2>
                    <p className="text-sm leading-relaxed">{test.body}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Whyus