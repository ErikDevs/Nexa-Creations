import React from 'react'
import Image from 'next/image'
import { navLink } from '@/constants/constants'
import logo from '@/public/logo.png'
import Link from 'next/link'
import Button from './button'

const Navbar = () => {
  return (
        <nav className='flex bg-gray-700 items-center h-24 justify-center top-0  gap-6'>
            <Link href='/'>
                 <Image src={logo} className='mr-24' alt='logo' height={100} width={150} />
            </Link>
             <ul className=' hidden font-medium  gap-8 lg:flex text-red-400'>{navLink.map(link => (
                <Link href={link.href} key={link.key} className='font-lg flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
             ))}</ul>
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