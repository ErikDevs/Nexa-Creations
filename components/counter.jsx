"use client"
import { acomplishments } from "@/constants/constants"
import CountUp from "react-countup"

const Counter = () => {
  return (
    <div className="mt-20 flex gap-8 justify-center">
        {acomplishments.map(acomplishment => (
           <div key={acomplishment.key} className="bg-gray-700 flex text-white px-16 py-8 rounded-sm  drop-shadow-2xl font-semibold">
            <div className="bg-red-500 px-2 rounded-md py-2 mr-4" >
             {acomplishment.icon}
            </div>
            <div className="flex flex-col items-end">
            <h1 className="text-5xl font-bold">
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