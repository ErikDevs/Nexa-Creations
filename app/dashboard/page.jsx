"use client"
import React from 'react'
import Link from 'next/link'
import {signIn, signOut, useSession } from 'next-auth/react'
import Button from '@/components/button'

const Dashboard = () => {

  const {data: session} = useSession()
  return (
    <div className='flex justify-center items-center h-screen'>
       
        <nav className='bg-white drop-shadow-2xl py-36  rounded-md px-60 flex items-center justify-center'>
        <div className='flex-col'>
          <h3 className='text-center font-bold'> Admin Dashboard</h3>
        <ul>
                {session ?.user ? (<>
                <Link href='/create-post'>
                    <Button
                    type="button"
                    variant= ""
                    title="Create Post"
                    />
                    
                </Link>

                <Button title="Logout" />
                
                </>) : (<>
                
                <div className='flex justify-center gap-4 items-center mt-10'>
                <Link href='/login'>
                   <Button title="Login" 
                    variant= "bg-red-500 text-white"
                   />
                </Link>
                
                <Link  href='/register'>
                   <Button 
                   variant=""
                   title="Register" />
                </Link>

                </div>
                </>)}
            </ul></div>
            
        </nav>
    </div>
  )
}

export default Dashboard