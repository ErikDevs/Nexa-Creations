"use client";
import React from "react";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";
import Button from "./one";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="md:px-[10%] px-4 h-screen items-center flex">
      <div className="flex-col md:items-start items-center">
        <div
          ref={ref}
          className={`${inView ? "animation-top" : ""} md:w-1/2 w-full`}
        >
          <h1
            className={`${integralCf.className} text-white md:text-6xl text-4xl tracking-wide`}
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
