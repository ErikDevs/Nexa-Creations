"use client";
import { integralCf } from "@/app/fonts/fonts";
import Image from "next/image";
import React, { useRef } from "react";
import design from "../../public/bulb.png";
import { useInView } from "react-intersection-observer";
import hasBg from "../../public/hasBg.png";

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);

  return (
    <div className="text-white relative hasBg py-10 px-6 lg:px-[10%] overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
      <Image className="absolute opacity-5 -z-10 right-0" src={hasBg} />
      <div
        className={`${inView ? "animation-left" : ""} flex flex-col`}
        ref={(el) => {
          ref(el);
          animatedElementRef.current = el;
        }}
      >
        <h1
          className={`${integralCf.className} text-2xl md:text-4xl tracking-wider`}
        >
          Why Choose Nexa Creatives
        </h1>
        <ol
          className="text-sm md:text-xl px-4 md:mt-6 leading-loose"
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
      <Image src={design} className="hidden md:block" />
    </div>
  );
};

export default WhyChooseUs;
