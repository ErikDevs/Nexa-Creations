"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { navLink } from '@/constants/constants'
import logo from '@/public/logo.png';
import Link from 'next/link'
import Button from './button'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';
import {motion } from "framer-motion"


const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false)
   const  variants = {
      open : {opacity: 1, height: "auto"},
      closed: {opacity: 0, height: "0"}
    }
  return (
        <nav  id='nav' className='lg:flex justify-center bg-gray-700 block lg:items-center py-1 md:py-4 lg:h-28 lg:gap-4 '>
           
           <Link className=' flex justify-start' href='/'>
                 <Image src={logo} width={150} alt='logo' />
            </Link>

            <div className='lg:hidden bg-red-500 h-fit px-4 py-5 absolute right-0 bottom-0 top-0'>
            {isOpen ?  (
               <CloseIcon className='text-white text-6xl ' onClick= {() => setIsOpen(false)} />
            ): (<SegmentIcon className='text-white text-6xl' onClick={() => setIsOpen(true)} />)}
            </div>
             <motion.ul
            
               className= {`font-medium ${isOpen ? "bg-gray-700 bg-blend-overlay block md:block md:w-full w-full mt-6 pl-4 md:mt-6" : "hidden"}  text-red-500`}
               variants={variants}
               animate={isOpen ? "open" : "closed"}
               transition={{duration: 0.3}}>

               {navLink.map(link => (
                  <>
                <Link href={link.href} key={link.key} onClick ={() => setIsOpen(false)} className={`md:font-lg flex py-2 cursor-pointer divide-slate-50 items-center pb-2 ${isOpen ? "px-4 block hover:font-bold  hover:bg-red-500 hover:text-white  " : ""} transition-all  md:hover:font-bold`}>
                    {link.label}
                </Link>
                 </>
             ))}
            </motion.ul>

            {/* Desktop view and tablet */}
            <ul className= "font-medium bg-gray-700 lg:gap-4 lg:justify-center  lg:mr-10 lg:items-center lg:flex hidden text-red-500">
               {navLink.map(link => (
                <Link href={link.href} key={link.key} onClick={() => setIsOpen(false)} className="md:font-lg cursor-pointer items-center md:hover:font-bold  transition-all">
                    {link.label}
                </Link>
             ))}
               <div className="lg:flex hidden">
                <Link href='#conatct'>
                <Button
                 type = "button"
                 title= "Get Started"
                 variant = 'bg-red-500 px-5 py-2 flex text-white'
                />
                </Link>
             </div>

            </ul>
             
        </nav>
    
  )
}

export default Navbar