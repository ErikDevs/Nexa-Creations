"use client";
import React from "react";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";
import Button from "./one";
import heroPhoto from "../../public/home-page.png";
import mobileHeroPhoto from "../../public/hero-photo.png";
import Image from "next/image";

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div className="px-4 h-screen items-center flex">
      <div className="flex-col items-start">
        <div
          ref={ref}
          className={`${
            inView ? "animation-top" : ""
          } w-full flex flex-col items-start`}
        >
          <h1
            className={`${integralCf.className} text-white text-4xl  tracking-wide`}
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
      <Image className="md:absolute hidden top-0 -z-10" src={heroPhoto} />
      <Image className="absolute bottom-56 -z-10" src={mobileHeroPhoto} />
    </div>
  );
};

export default Hero;
