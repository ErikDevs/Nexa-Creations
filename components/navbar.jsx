"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { navLink } from '@/constants/constants'
import logo from '@/public/logo.png'
import Link from 'next/link'
import Button from './button'
import SegmentIcon from '@mui/icons-material/Segment';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
  return (
        <nav className='flex bg-gray-700 items-center h-24 md:justify-center top-0  gap-6'>
            <Link href='/'>
                 <Image src={logo} className="md:mr-2 mr-36" width={150} alt='logo'  />
            </Link>

            {isOpen ?  (
               <CloseIcon className='text-white text-4xl md:hidden z-20' onClick= {() => setIsOpen(false)} />
            ): (<SegmentIcon className='text-white md:hidden text-4xl' onClick={() => setIsOpen(true)} />)}
             <ul 
             className= {`font-medium   ${isOpen ? "bg-gray-700 absolute left-36 top-16 bg-blend-overlay w-full right-36 px-8 h-full gap-2 z-10" : "hidden"}    md:gap-4 md:flex  text-white`}>
               {navLink.map(link => (
                <Link href={link.href} key={link.key} onClick ={() => setIsOpen(false)} className={`md:font-lg  cursor-pointer items-center pb-2 ${isOpen ? "px-4 block  hover:font-bold" : ""} transition-all  md:hover:font-bold`}>
                    {link.label}
                </Link>
             ))}
            </ul>
             <div className="lg:flex hidden">
                <Link href='#conatct'>
                <Button
                 type = "button"
                 title= "Get Started"
                 variant = 'bg-red-500 px-5 py-2 flex text-white'
                />
                </Link>
             </div>
        </nav>
    
  )
}

export default Navbar