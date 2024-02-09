"use client";
import Image from "next/image";
import React from "react";
import man from "../../public/man.jpg";
import { integralCf, news } from "@/app/fonts/fonts";
import { testmonials } from "@/constants/constants";

const Testimonials = () => {
  return (
    <div className="px-4">
      <div>
        <h1
          className={`text-2xl md:text-4xl mt-16 ${integralCf.className} text-white text-center underline underline-offset-8 decoration-purple-500`}
        >
          Client Testmonials
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 justify-center gap-8">
        {testmonials.map((testmony) => (
          <div
            key={testmony.name}
            className={`flex flex-col p-8 w-auto -z-10 relative bg-gray-950 text-white rounded-lg`}
          >
            <div className="mt-10">
              <h1
                className={`${news.className} text-9xl text-purple-500  font-700 absolute top-0`}
              >
                "
              </h1>
              <p className="text-sm leading-loose md:text-lg">
                {testmony.message}
              </p>
            </div>
            <div className="flex gap-6  w-full mt-4 items-center">
              <Image
                className="rounded-full ring-2 h-16 w-16 ring-white"
                src={man}
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-sm">{testmony.name}</h2>
                <p className="text-xs">{testmony.destignation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
