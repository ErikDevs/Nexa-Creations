import Link from "next/link"
import Image from "next/image"
import heroPhoto from '../public/20945379.jpg'
import { callToAction, services } from "@/constants/constants"
import AddchartIcon from '@mui/icons-material/Addchart';
import Button from "./button"

const Hero = () => { 
  return (
    <div className='md:flex block mx-2 mt-12'>
        <div className='flex-col'>
            <div className="flex items-center">
              <AddchartIcon className="text-red-500 hidden md:flex" />
              <h3 className="text-center md:text-left md:ml-2">Welcome to Nexa Creative Digital Solutions</h3>
            </div>
            <h1 className="text-4xl md:text-5xl  text-center md:text-left leading-25 font-extrabold text-gray-700  font-marriWeather mt-4">We offer Digital Marketing & Graphic Design Solutions</h1>
            <div className="grid grid-flow-col mt-4 md:grid-rows-2 grid-rows-3 gap-2">
          {services.map(service => (
            <Link href={service.href} key={service.key} className="bg-gray-700 text-white text-center md:text-left text-sm px-2 py-3">{service.label}</Link>
          ))}
        </div>
        <h3 className="mt-10 md:text-left text-center">Join us in unlocking your business full potential and be the best in your niche!</h3>
        <div className="flex justify-center md:justify-start gap-2 mt-4">
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
        <div className='lg:flex w-[100%] h-[100%] hidden'>
            <Image src={heroPhoto} className="w-[100%]" alt="hero-photo"/>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Hero