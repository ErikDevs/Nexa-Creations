"use client"
import { Pricing } from '@/constants/constants'
import { useEffect } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {motion, useAnimation } from 'framer-motion'
import {useInView } from 'react-intersection-observer'

const Price = () => {
  const heroVariant = {
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
        variants={heroVariant}
        initial = "hidden"
        animate = {control}
        transition={{duration: 1}}
    id='price' className='flex mt-10 justify-center'>
        <div className='lg:flex gap-4 '>
           {Pricing.map((ratecard) => (
            <div key={ratecard.key} className='flex-col'>
             <div className={`text-white text-2xl rounded-sm py-4 px-6 mt-8 flex-col ${ratecard.bg}`}>
                 <h3 className='font-semibold  text-center'>{ratecard.title}</h3>
                 <p className='text-sm text-center'>{ratecard.descs}</p>
             </div>
             <div className='flex-col hover:drop-shadow-2xl px-2 py-2 hover:bg-white rounded-sm justify-center'>
              <h1 className='text-4xl text-center font-bold'>
                <sup className='font-normal text-sm'>ksh</sup>{ratecard.price}K</h1>
                <h3 className='text-center'>Monthly</h3>
                <div className='flex-col px-2 mt-8'>
                  {ratecard.package.map((price, i) => (
                     <div key={i} className='flex mt-2'>
                        <CheckCircleOutlineIcon className='mr-2 text-gray-700' />
                        <h3 className='text-sm'>{price}</h3>
                     </div>
                  ))}
                </div>
             </div>
             </div>
           ))}
        </div>
    </motion.div>
  )
}

export default Price