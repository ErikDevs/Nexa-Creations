"use client"
import { acomplishments } from "@/constants/constants"
import CountUp from "react-countup"

const Counter = () => {
  return (
    <div className="md:flex  justify-center lg:w-fit md:mx-auto  lg:py-8 mt-10 ">
        {acomplishments.map(acomplishment => (
           <div key={acomplishment.key} 
           className="bg-gray-700 flex text-white rounded-sm mx-4 mt-2 px-4 py-4 drop-shadow-2xl font-semibold">
            <div className="bg-red-500 px-4 flex justify-center items-center rounded-md  mr-4" >
             {acomplishment.icon}
            </div>
            <div className="flex-col md:items-end items-center">
            <h1 className="lg:text-5xl text-2xl font-bold">
            <CountUp
                start={acomplishment.start}
                end = {`${acomplishment.stop}`}
                duration={5}
                separator=""
                prefix= ""/> +
            </h1> 
            <p className="text-md font-normal">{acomplishment.name}</p>
            </div>

           </div>
            
        ))}
    </div>
  )
}

export default Counter