"use client"
import { useEffect } from "react"
import { acomplishments } from "@/constants/constants"
import CountUp from "react-countup"
import {useInView } from "react-intersection-observer"
import {motion, useAnimation } from "framer-motion"

const Counter = () => {
  const counterVariant = {
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
    variants={counterVariant}
    initial = "hidden"
    animate = {control}
    transition={{duration: 1}}
    
    className="md:flex  justify-center lg:w-full md:mx-auto  lg:py-8 my-20 ">
        {acomplishments.map(acomplishment => (
           <div key={acomplishment.key} 
           className="bg-gray-700 flex text-white rounded-sm mx-4 mt-2 px-4 py-4 drop-shadow-2xl font-semibold">
            <div className="bg-red-500 px-4 flex justify-center items-center rounded-md  mr-4" >
             {acomplishment.icon}
            </div>
            <div className="flex-col md:items-end items-center">
            <h1 className="lg:text-5xl text-2xl font-bold">
            <CountUp
                start={acomplishment.start}
                end = {`${acomplishment.stop}`}
                duration={5}
                separator=""
                prefix= ""/> +
            </h1> 
            <p className="text-md font-normal">{acomplishment.name}</p>
            </div>

           </div>
            
        ))}
    </motion.div>
  )
}

export default Counter