"use client"
import React, { useState } from 'react'
import { signIn } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify'
import Link from 'next/link'

const Register = () => {

    const [ username, setUsername ] = useState("")
    const [email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        if(username === "" || email === "" || password === "") {
            toast.error("Fields should not be empty")
            return
        }

        if(password.length < 8) {
            toast.error("Password must be 8 characters long")
            return
        }

        try { 

            const res =  await fetch('api/register', {
                headers: {
                    "content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({username, email, password})
            })


            console.log(await res.json())

            if(res.ok) {
                toast.success("Successfully registered the user")
                setTimeout(() => {
                    signIn()
                }, 1500)
                return
            } else {
                
                toast.error("Error occured while trying to register user")
            }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (

    <section className='bg-gray-100 max-w-screen-sm m-auto p-8 flex flex-col items-center justify-center rounded-md'>
        <h1 className='bm-4 w-full text-4xl font-light text-center text-gray-900 uppercase sm:text-5xl'>
            Register
        </h1>
        <div className='flex flex-col w-full px-4 py-8 bg-white rounded-md shadow sm:px-6 md:px-8 lg:px-10'>

            <div className='self-center text-el font-light text-gray-600 sm:text-2xl'>
                Join Us
            </div>
            <div className='mt-8'>
                 <form 
                 action=""
                 onSubmit={handleSubmit}>
                 <div className='mb-2'>
                    <div className='flex'>
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='rounded-r-lg appearance-none border
                         border-gray-300 w-full px-4 bg-white text-gray-700
                         placeholder-gray-400
                         shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                         placeholder='Your Email' />
                    </div>
                    
                 </div>
                 <div className='flex flex-col mb-6'>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='rounded-r-lg appearance-none border
                         border-gray-300 w-full px-4 bg-white text-gray-700
                         placeholder-gray-400
                         shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                         placeholder='Username' />

                    </div>
                 <div className='flex flex-col mb-6'>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='rounded-r-lg appearance-none border
                         border-gray-300 w-full px-4 bg-white text-gray-700
                         placeholder-gray-400
                         shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' 
                         placeholder='Password' />
                    </div>
                    <button
                    onClick={handleSubmit}
                    className='py-2 px-4 bg-red-500 focus:ring-1 focus:ring-red-500 focus:ring-offset-red-500
                    text-white w-full transition-all'>Register</button>
                 </form>
            </div>

            <div className='flex items-center justify-center mt-6'>
                  <Link href= "/login" className='inline-flex items-center text-sm font-thin text-center text-gray-500 hover:text-gray-700'>
                      <span className='ml-2'>
                        Already have an account?
                      </span>
                  </Link>
            </div>

            {username}

        </div>
    </section>
  )
}

export default Register