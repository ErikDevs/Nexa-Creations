import React from 'react'
import Card from './Card'
import { cards } from '@/constants/constants'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Tag = () => {
  return (
    <>
    <div id='what-we-do' className='mt-20 flex flex-col items-center lg:max-w-[600px] m-auto justify-center'>
      <div className='flex'>
        <i><FavoriteIcon className='text-red-500 mr-2' /></i>
        <h3>We Do it with love</h3>
        </div>
         <h1 className='text-4xl text-center font-bold mt-6'>
         Elevate Your Brand Online Presence with Nexa Creations
         </h1>
         <p className='text-md text-center mt-10'>From web design to social media mastery, our tailored digital solutions make a lasting impact. Your brand’s success, our expertise. <br />Ready to rise? Connect with Nexa Creations.</p>
    </div>
    <div className='md:grid md:grid-flow-col md:grid-rows-6 lg:grid-rows-4 flex-col'>
         {cards.map(card => (
           <Card 
           href = {card.href}
           key={card.key} 
           title ={card.title}
           body = {card.body}
           icon = {card.icon}/>
         ))}
    </div>
    </>
  )
}

export default Tag