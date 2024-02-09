"use client";
import Image from "next/image";
import binoculas from "../../public/visual-reality.png";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";

const Introduction = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="px-4 grid text-white lg:px-[10%] items-center py-10 grid-cols-1 md:grid-cols-2">
      <div
        className={`${
          inView ? "animation-left" : ""
        } w-full flex flex-col justify-center`}
        ref={ref}
      >
        <h1
          className={`${integralCf.className} text-2xl md:text-4xl tracking-wider`}
        >
          About Us
        </h1>
        <h2 className={`${integralCf.className} text-lg mt-10 tracking-widest`}>
          Unleashing Creativity, Igniting Digital Experiences
        </h2>
        <p className="mt-10 text-sm md:text-lg leading-loose">
          At Nexa Creatives, we are a collective of creative minds, design
          enthusiasts, and digital storytellers united by a shared vision – to
          revolutionize the digital landscape. Established with a fervent
          commitment to creativity, innovation, and client success, we go beyond
          pixels and code; we craft narratives that resonate
        </p>
      </div>
      <Image
        className={`${inView ? "animation-bottom" : ""} hidden md:block`}
        src={binoculas}
      />
    </div>
  );
};

export default Introduction;
