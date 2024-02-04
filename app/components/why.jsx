"use client";
import { integralCf } from "@/app/fonts/fonts";
import Image from "next/image";
import React, { useRef } from "react";
import design from "../../public/design.png";
import { useInView } from "react-intersection-observer";
import hasBg from "../../public/hasBg.png";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);

  return (
    <div className="text-white relative h-screen hasBg px-10 mt-16 flex-col items-center">
      <Image
        className="absolute h-screen opacity-5 w-full -z-10 right-0"
        src={hasBg}
      />
      <div className="md:w-3/4 w-full">
        <Image
          className={`${inView ? "animation-bottom" : ""} hidden`}
          src={design}
          ref={(el) => {
            ref(el);
            animatedElementRef.current = el;
          }}
        />
      </div>
      <div
        className={`${
          inView ? "animation-left" : ""
        } flex flex-col w-full md:w-1/2`}
        ref={(el) => {
          ref(el);
          animatedElementRef.current = el;
        }}
      >
        <h1 className={`${integralCf.className} text-4xl tracking-wider`}>
          Why Choose Nexa Creatives
        </h1>
        <ol
          className="text-xl mt-10 leading-relaxed"
          style={{ listStyleType: "decimal" }}
        >
          <li>
            Passionate Creatives: Our team comprises passionate individuals who
            live and breathe design.
          </li>
          <li>
            Innovative Solutions: In a rapidly evolving digital landscape, we
            stay ahead of the curve, adopting the latest trends and technologies
            to ensure our clients stay at the forefront of their industries.
          </li>
          <li>
            Client-Centric Approach: Your success is our success. We believe in
            building strong, collaborative partnerships with our clients,
            understanding their goals, and translating them into design
            solutions that exceed expectations.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WhyChooseUs;
