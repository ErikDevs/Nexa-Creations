import Image from "next/image";
import React from "react";
import man from "../public/man.jpg";
import { integralCf } from "@/app/fonts/fonts";
import { testmonials } from "@/constants/constants";

const Testimonials = () => {
  return (
    <div className="px-[10%] mt-20">
      <div className="">
        <h1
          className={`text-center text-5xl ${integralCf.className} text-white `}
        >
          Client Testmonials
        </h1>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 mt-10 marquee justify-center gap-8">
        {testmonials.map((testmony) => (
          <div
            key={testmony.name}
            className="flex flex-col p-8 w-auto bg-gray-700 text-white rounded-lg"
          >
            <div className="flex gap-6 items-center">
              <Image
                className="rounded-full ring-2 h-24 w-24 ring-white"
                src={man}
              />
              <div className="flex flex-col">
                <h2 className="font-bold">{testmony.name}</h2>
                <p className="text-sm">{testmony.destignation}</p>
              </div>
            </div>
            <div className="mt-10">
              <p>{testmony.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
