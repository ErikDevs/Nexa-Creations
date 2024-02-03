"use client";
import React, { useEffect, useState } from "react";
import { dayOne } from "@/app/fonts/fonts";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { navLink } from "@/constants/constants";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";

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
  return (
    <>
      <div className={`${bgColor ? "" : "bg-gray-900"} px-[10%] sticky top-0`}>
        <nav
          className={`${dayOne.className} text-white  h-20 justify-between flex items-center`}
        >
          <Link href="/">
            <Image className="w-60" src={logo}></Image>
          </Link>
          <ul className="flex gap-8">
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
