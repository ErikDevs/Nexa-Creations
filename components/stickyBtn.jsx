import React from 'react'
import Link from 'next/link'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const StickyBtn = () => {
  return (
        <div className="bg-red-500 fixed bottom-2 z-50 right-2 px-4 py-4 rounded-full">
            <Link  href= '#nav'>
            <ExpandLessIcon className='text-white text-8xl' />
            </Link>
            </div>
    
  )
}

export default StickyBtn