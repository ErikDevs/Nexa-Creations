import { Pricing } from '@/constants/constants'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Price = () => {
  return (
    <div id='price' className='flex mt-10 justify-center'>
        <div className='md:flex gap-4 '>
           {Pricing.map((ratecard) => (
            <div key={ratecard.key} className='flex-col px-2 py-2 hover:drop-shadow-lg hover:bg-white'>
             <div
             className={`text-white text-2xl  rounded-sm py-4 px-6 mt-8 flex-col ${ratecard.bg}`}>
                 <h3 className='font-semibold text-center'>{ratecard.title}</h3>
                 <p className='text-sm text-center'>{ratecard.descs}</p>
             </div>
             <div className='flex-col mt-4  justify-center'>
              <h1 className='text-4xl text-center font-bold'>
                <sup className='font-normal text-sm'>ksh</sup>{ratecard.price}K</h1>
                <h3 className='text-center'>Monthly</h3>
                <div className='flex-col mt-8'>
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
    </div>
  )
}

export default Price