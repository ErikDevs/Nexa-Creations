import Link from "next/link"
import Image from "next/image"
import heroPhoto from '../public/20945379.jpg'
import { callToAction, services } from "@/constants/constants"
import AddchartIcon from '@mui/icons-material/Addchart';
import Button from "./button"

const Hero = () => { 
  return (
    <div className='px-2 flex mt-8'>
        <div className='hero-left flex-col lg:max-w-[600px]'>
            <div className="flex items-center"><AddchartIcon className="text-red-500" />
            <h3 className="text-sm ml-2">Welcome to Nexa Creative Digital Solutions</h3></div>
            <h1 className="text-6xl font-extrabold text-gray-700  mt-4">We offer Digital Marketing & Graphic Design Solutions</h1>
            <div className="grid grid-flow-col mt-4 grid-rows-2  gap-2">
          {services.map(service => (
            <Link href={service.href} key={service.key} className="bg-gray-700 text-white mt-4 text-sm px-2 py-3">{service.label}</Link>
          ))}
        </div>
        <h3 className="mt-10">Join us in unlocking your business full potential and be the best in your niche!</h3>
        <div className="flex mt-4 gap-2">
         {callToAction.map(action => (
           <Link key={action.title} href={action.href}>
             <Button
               title={action.title}
               type="button"
               variant= {action.variant}/>
           </Link>
         ))}
        </div>
        </div>
        <div className='mx-2 w-[150%]'>
            <Image src={heroPhoto} alt="hero-photo"/>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Hero