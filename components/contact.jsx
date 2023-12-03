import { conatct } from '@/constants/constants'
import { CheckBox } from '@mui/icons-material'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex mt-16 items-center justify-center'>
        <div className='flex-col'>
            <div className='flex justify-center'>
            <CheckBox className='text-red-500'/>
            <h3 className='text-center'>Get in Touch with us</h3>
            </div>
            <h1 className='text-4xl text-center font-bold mt-4'>Contact Us Today</h1>
            <div className='flex gap-[16rem] mt-10'>
            {conatct.map(contactInfo => (
                <div key={contactInfo.key} className='flex p-10 hover:bg-white justify-center items-center hover:drop-shadow-lg'>
                    <i className='mr-2 bg-red-500 rounded-md px-2 py-2'>{contactInfo.icon}</i>
                    <h3>{contactInfo.name}</h3>
                </div>
            ))}
            </div>
     </div>
       
    </div>
  )
}

export default Contact