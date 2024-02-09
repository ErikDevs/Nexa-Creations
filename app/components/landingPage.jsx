"use client";
import React from "react";
import { integralCf } from "@/app/fonts/fonts";
import Button from "./one";
import youngMan from "../../public/young-man.png";
import mobileHeroPhoto from "../../public/hero-photo.png";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView();
  return (
    <div
      className={` heroBg flex md:px-[10%] h-[400px] p-4 items-center md:h-[600px] lg:min-h-[100px] overflow-hidden`}
    >
      <div className="flex md:w-1/2 flex-col">
        <h1
          className={`${integralCf.className}  text-white text-4xl  lg:text-6xl md:text-5xl tracking-wide`}
        >
          Transforming Ideas into Visual masterpieces
        </h1>
        <p className="text-white text-xl mt-10">
          Crafting Unique and Engaging Digital Experiences
        </p>
        <Button
          className={`${
            inView ? "bounce" : ""
          } mt-6 text-xl w-fit px-5 ring-1  ring-purple-500 hover:ring-2 transition-all  font-normal`}
          name="Get in touch"
          ref={ref}
        />
      </div>
      <Image className="hidden lg:block w-[40%]" src={youngMan} />
      <Image
        className="animation-top top-10 absolute -z-10 lg:hidden bottom-56"
        src={mobileHeroPhoto}
      />
    </div>
  );
};

export default Hero;
