import Image from "next/image";
import React from "react";
import man from "../../public/man.jpg";
import { integralCf, news } from "@/app/fonts/fonts";
import { testmonials } from "@/constants/constants";

const Testimonials = () => {
  return (
    <div className="px-4">
      <div className="">
        <h1 className={`text-4xl mt-16 ${integralCf.className} text-white `}>
          Client Testmonials
        </h1>
      </div>
      <div className="grid grid-rows-2 grid-cols-1  mt-10 marquee justify-center gap-8">
        {testmonials.map((testmony) => (
          <div
            key={testmony.name}
            className="flex flex-col p-8 w-auto relative bg-blue-900 text-white rounded-lg"
          >
            <div className="mt-10">
              <h1
                className={`${news.className} text-9xl text-orange-500  font-700 absolute top-0`}
              >
                "
              </h1>
              <p>{testmony.message}</p>
            </div>
            <div className="flex gap-6 mt-4 items-center">
              <Image
                className="rounded-full ring-2 h-16 w-16 ring-white"
                src={man}
              />
              <div className="flex flex-col">
                <h2 className="font-bold">{testmony.name}</h2>
                <p className="text-sm">{testmony.destignation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
