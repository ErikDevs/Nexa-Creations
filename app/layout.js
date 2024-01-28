"use client"
import { DM_Sans, Inter, Poppins, Sora } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useState } from 'react'
import Provider from '@/sessionProvider'


const sora = Sora({ subsets: ['latin'], weight: [ "100", "200", "300", "400", "500", "600", "700", "800"]})



// export const metadata = {
//   title: 'Nexa Creation',
//   description: 'Website to showcase our services',
// }

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true)


    setTimeout(() => { setLoading(false)}, 3000)
  
  return (
    <html lang="en">
      <body className={`${sora.className} bg-slate-50`}>
        {loading ? <div className='flex justify-center bg-slate-300 min-h-screen m-auto items-center'>
        <div className='loader'></div>
        </div> : <>
          <Provider>
          <Navbar  />
          {children}
          <Footer />  
          </Provider>

          
          </>
        }
        
        </body>
    </html>
  )
}
