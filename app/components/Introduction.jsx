"use client";
import React, { useRef } from "react";
import Image from "next/image";
import binoculas from "../public/visual-reality.png";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);
  return (
    <div className="text-white h-screen flex">
      <div className="px-[10%] flex">
        <div className="w-3/4">
          <Image
            className={`${inView ? "animation-bottom" : ""}`}
            src={binoculas}
            ref={(el) => {
              ref(el);
              animatedElementRef.current = el;
            }}
          />
        </div>
        <div
          className={`${
            inView ? "animation-right" : ""
          } w-1/2 flex flex-col justify-center`}
          ref={(el) => {
            ref(el);
            animatedElementRef.current = el;
          }}
        >
          <h1 className={`${integralCf.className} text-5xl tracking-wider`}>
            About Us
          </h1>
          <h2
            className={`${integralCf.className} text-2xl mt-10 tracking-widest`}
          >
            Unleashing Creativity, Igniting Digital Experiences
          </h2>
          <p className="mt-10 text-xl leading-relaxed">
            At Nexa Creatives, we are a collective of creative minds, design
            enthusiasts, and digital storytellers united by a shared vision – to
            revolutionize the digital landscape. Established with a fervent
            commitment to creativity, innovation, and client success, we go
            beyond pixels and code; we craft narratives that resonate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
