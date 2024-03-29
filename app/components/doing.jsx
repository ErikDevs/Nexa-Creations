"use client";
import { integralCf } from "@/app/fonts/fonts";
import Image from "next/image";
import project1 from "../../public/projectOne.jpg";
import Fish_logo from "../../public/fish_logo.png";
import Bag from "../../public/paper.jpg";
import project3 from "../../public/project3.jpg";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const animatedElementRef = useRef(null);
  return (
    <div className="text-white  bg-gray-950 py-10 px-4 lg:px-[10%]">
      <div className="flex flex-col">
        <div>
          <h1
            className={`${integralCf.className} text-center underline underline-offset-8 decoration-purple-500 text-4xl tracking-wider`}
          >
            Our latest Projects
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-auto mt-10">
            <Image
              className={`object-scale-down ${
                inView ? "animation-left" : ""
              } zoom`}
              src={project1}
              ref={(el) => {
                ref(el);
                animatedElementRef.current = el;
              }}
            />
            <p className={`${integralCf.className} mt-4 text-xl tracking-wide`}>
              Web Design
            </p>
            <p
              className={`${integralCf.className}  text-purple-500 tracking-wide`}
            >
              UI/UX, SECURITY, START UP
            </p>
          </div>
          <div className="w-auto mt-10">
            <Image
              className={`object-scale-down ${
                inView ? "animation-top" : " "
              } zoom`}
              src={Fish_logo}
            />
            <p className={`${integralCf.className} mt-4 text-xl tracking-wide`}>
              AERIKO
            </p>
            <p
              className={`${integralCf.className}  text-purple-500 tracking-wide`}
            >
              LOGO, ANIMATION, BRANDING
            </p>
          </div>
          <div className="w-auto h-auto mt-10">
            <Image
              className={`object-scale-down ${
                inView ? "animation-right" : ""
              }  zoom`}
              src={Bag}
            />
            <p className={`${integralCf.className} mt-4 text-xl tracking-wide`}>
              Deep Lab
            </p>
            <p
              className={`${integralCf.className}  text-purple-500 tracking-wide`}
            >
              Brand identity, marketing
            </p>
          </div>
          <div className="w-auto mt-10">
            <Image
              className={`object-scale-down ${
                inView ? "animation-top" : ""
              } zoom`}
              src={project3}
            />
            <p className={`${integralCf.className} mt-4 text-xl tracking-wide`}>
              Fit x
            </p>
            <p
              className={`${integralCf.className}  text-purple-500 tracking-wide`}
            >
              App design, ux/ui, Brand identity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
