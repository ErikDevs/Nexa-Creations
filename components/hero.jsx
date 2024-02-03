"use client";
import React from "react";
import { integralCf } from "@/app/fonts/fonts";
import { Button } from ".";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="px-[10%] h-screen items-center flex">
      <div className="flex-col items-center">
        <div ref={ref} className={`${inView ? "animation-top" : ""} w-1/2 `}>
          <h1
            className={`${integralCf.className} text-white text-6xl tracking-wide`}
          >
            Transforming Ideas into Visual masterpieces
          </h1>
          <p className="text-white text-xl mt-10">
            Crafting Unique and Engaging Digital Experiences
          </p>
        </div>
        <Button className="mt-6 text-xl font-normal" name="GET IN TOUCH" />
        <hr className="w-32 bg-purple-500 border-none h-[2px]" />
      </div>
    </div>
  );
};

export default Hero;
