"use client";
import Image from "next/image";
import Woman from "../../public/design.png";
import { integralCf } from "@/app/fonts/fonts";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div className="px-4 lg:px-[10%]  overflow-hidden grid md:grid-cols-2 grid-cols-1 items-center bg-gray-950">
      <Image className={`${inView ? "" : ""} md:block hidden`} src={Woman} />
      <div
        className={`${inView ? "animation-right" : ""}  text-white`}
        ref={ref}
      >
        <h1
          className={`${integralCf.className} tracking-wider text-4xl lg:text-5xl`}
        >
          Where Vision Meets Innovation
        </h1>
        <p className="mt-10 text-xl leading-relaxed">
          Welcome to Nexa Creatives, where we redefine digital landscapes
          through innovative and captivating design. Our passion for creativity,
          coupled with cutting-edge technology, allows us to transform your
          ideas into visually stunning, user-centric masterpieces.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
