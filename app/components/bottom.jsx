import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-[10%] md:mt-0 mt-60 py-20 md:flex flex-col justify-around text-white">
        <div className="flex md:flex-1 flex-col">
          <Image className="w-56" src={logo} />
          <p className="text-lg mt-5">Transform Your Business With Us</p>
          <div className="flex justify-start items-center gap-4">
            <p>Follow Us:</p>
            <BsInstagram />
            <BiLogoFacebook />
            <BsTwitterX />
            <FaBehance />
          </div>
        </div>
        <div className="flex flex-col mr-20">
          <h2>Quick Links</h2>
          <Link href="">Home</Link>
          <Link href="">Services</Link>
          <Link href="">About Us</Link>
          <Link href="">Contact</Link>
        </div>
        <div className="flex flex-col">
          <h2>Sevices</h2>
          <p>Web Development</p>
          <p>Graphic Design</p>
          <p>Digital Marketing</p>
          <p>Branding</p>
        </div>
      </div>
      <hr className="h-[1px]" />
      <p className="h-16 px-[10%] text-white text-xs flex justify-start items-center">
        Copyright@2024nexacreations All rights reserves.
      </p>
    </div>
  );
};

export default Footer;
