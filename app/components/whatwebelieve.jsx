"use client";
import { integralCf } from "@/app/fonts/fonts";
import React, { useRef } from "react";
import Image from "next/image";
import Drone from "../../public/drone.png";
import { useInView } from "react-intersection-observer";

const Ourphilosophy = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);
  return (
    <div className="text-white flex-col md:px-[10%] px-4 h-screen w-full justify-center items-center md:flex">
      <div
        className={`${
          inView ? "animation-right" : ""
        } flex flex-col w-full  md:w-1/2`}
        ref={(el) => {
          ref(el);
          animatedElementRef.current = el;
        }}
      >
        <h1 className={`${integralCf.className} text-5xl tracking-wider`}>
          Our Design Philosophy
        </h1>
        <p className={`mt-10 text-xl leading-relaxed`}>
          We believe that design is more than aesthetics; it's a powerful tool
          that shapes perceptions, builds connections, and drives results. Our
          approach is rooted in collaboration, pushing boundaries, and turning
          ideas into visually compelling realities. Whether it's a website that
          captivates, a brand that stands out, or an interface that engages, we
          breathe life into every project with a blend of strategy and
          creativity.
        </p>
      </div>
      <div className="w-3/4">
        <Image
          className={`${inView ? "animation-left" : ""}`}
          src={Drone}
          ref={(el) => {
            ref(el);
            animatedElementRef.current = el;
          }}
        />
      </div>
    </div>
  );
};

export default Ourphilosophy;
