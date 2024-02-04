"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Woman from "../../public/woman.png";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);
  return (
    <div className="px-4 flex flex-col h-screen justify-center items-center">
      <div className={`${inView ? "animation-bottom" : ""} w-full  text-white`}>
        <h1 className={`${integralCf.className} tracking-wider text-4xl`}>
          Where Vision Meets Innovation
        </h1>
        <p className="mt-10 text-xl leading-relaxed">
          Welcome to Nexa Creatives, where we redefine digital landscapes
          through innovative and captivating design. Our passion for creativity,
          coupled with cutting-edge technology, allows us to transform your
          ideas into visually stunning, user-centric masterpieces.
        </p>
      </div>
      <div className="w-3/4">
        <Image
          className={`${inView ? "animation-right" : ""} absolute hidden`}
          src={Woman}
          ref={(el) => {
            ref(el);
            animatedElementRef.current = el;
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
