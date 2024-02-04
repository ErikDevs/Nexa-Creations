"use client";
import React, { useEffect, useState } from "react";
import { dayOne } from "@/app/fonts/fonts";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { navLink } from "@/constants/constants";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
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

  return (
    <>
      <div
        className={`${
          bgColor ? "" : "bg-gray-900"
        } md:h-20 md:px-[10%] md:sticky md:top-0 h-16 px-4`}
      >
        <nav
          className={`${dayOne.className} text-white relative justify-between flex items-center`}
        >
          {isOpen ? (
            <button
              className="absolute lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <TfiClose style={{ fontSize: "1.5rem" }} />
            </button>
          ) : (
            <button
              className="absolute lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <TfiAlignJustify style={{ fontSize: "1.5rem" }} />
            </button>
          )}

          <Link className="ml-20 lg:ml-0" href="/">
            <Image className="md:w-60 w-48" src={logo}></Image>
          </Link>

          {isOpen && (
            <ul
              className={`${
                isOpen && "open"
              }  bg-gray-900 md:gap-8 md:px-10 md:py-10 mobile md:w-1/2 absolute w-full h-screen px-4 -left-4 top-16 md:h-auto md:top-20`}
            >
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
          )}

          {/* Desktop navigation */}

          <ul className="lg:flex hidden gap-8">
            {navLink.map((link) => (
              <Link
                className="hover-underline-animation transition-colors"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="flex gap-8">
            <Instagram />
            <Facebook />
            <LinkedIn />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
