"use client";
import { integralCf } from "@/app/fonts/fonts";
import Image from "next/image";
import Drone from "../../public/drone.png";
import { useInView } from "react-intersection-observer";

const Ourphilosophy = () => {
  const [ref, inView] = useInView();

  return (
    <div className="text-white px-4 grid grid-cols-1 md:grid-cols-2 py-10 lg:px-[10%]  bg-gray-950 items-center">
      <Image className={` animation-bottom hidden md:block`} src={Drone} />
      <div
        className={`${inView ? "animation-right" : ""} flex flex-col w-full`}
        ref={ref}
      >
        <h1
          className={`${integralCf.className} text-2xl md:text-4xl tracking-wider`}
        >
          Our Design Philosophy
        </h1>
        <p className={`mt-10 md:text-xl text-sm leading-loose`}>
          We believe that design is more than aesthetics; it's a powerful tool
          that shapes perceptions, builds connections, and drives results. Our
          approach is rooted in collaboration, pushing boundaries, and turning
          ideas into visually compelling realities. Whether it's a website that
          captivates, a brand that stands out, or an interface that engages, we
          breathe life into every project with a blend of strategy and
          creativity.
        </p>
      </div>
    </div>
  );
};

export default Ourphilosophy;
