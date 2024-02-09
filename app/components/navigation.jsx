"use client";
import React, { useEffect, useRef, useState } from "react";
import { dayOne } from "@/app/fonts/fonts";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { navLink } from "@/constants/constants";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { AnimatePresence, motion, useScroll } from "framer-motion";

const Navigationbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const navigationVariants = {
    visible: {
      opacity: 1,
      transition: { x: { velocity: 100 }, duration: 0.3 },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div
        className={`${
          bgColor ? "bg-gray-900" : ""
        } sticky md:top-0 h-16 px-4  lg:px-[10%]`}
      >
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="progress-bar"
        ></motion.div>
        <nav
          className={`${dayOne.className} text-white relative md:justify-between bg-transparent justify-end flex items-center`}
        >
          <div className="absolute lg:hidden left-0 top-4">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <TfiClose style={{ fontSize: "1.5rem" }} />
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <TfiAlignJustify style={{ fontSize: "1.5rem" }} />
              </button>
            )}
          </div>

          <Link className="ml-20 lg:ml-0" href="/">
            <Image className="w-48" src={logo}></Image>
          </Link>

          {/* Desktop navigation */}

          <ul className="lg:flex hidden gap-8">
            {navLink.map((link) => (
              <Link
                className="hover-underline-animation transition-all"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className=" hidden md:flex gap-8">
            <Instagram />
            <Facebook />
            <LinkedIn />
          </div>
        </nav>

        {/* mobile navigation */}
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navigationVariants}
            className={`flex text-white text-sm md:text-lg h-screen md:w-full md:h-[400px] px-10 -ml-4 shadow-lg w-3/4 rounded-lg bg-gray-900 m-0`}
          >
            <ul className={`${dayOne.className}`}>
              {navLink.map((link) => (
                <li key={link.label}>
                  <Link
                    className="hover-underline-animation py-4 transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigationbar;
