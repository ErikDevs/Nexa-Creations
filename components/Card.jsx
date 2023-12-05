import React from 'react'

const Card = ({title, body, icon, href}) => {
  return (
        <div id= {href} className='flex flex-col justify-center items-center hover:bg-white hover:drop-shadow-2xl px-8 py-10'>
        <i className='bg-red-500 text-white px-2 py-2 rounded-md mb-8'>{icon}</i>
         <h2 className='text-center text-2xl font-semibold'>{title}</h2>
         <p className='text-center text-sm mt-2'>{body}</p>
    </div>
  )
}

export default Card