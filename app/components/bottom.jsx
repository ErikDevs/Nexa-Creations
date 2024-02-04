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
      <div className="px-4 md:mt-0 py-20 flex-col  text-white">
        <div className="flex md:flex-1 flex-col">
          <Image className="w-56" src={logo} />
          <p className="text-lg mt-5">Transform Your Business With Us</p>
          <div className="flex justify-start items-center mt-2 gap-4">
            <p>Follow Us:</p>
            <BsInstagram />
            <BiLogoFacebook />
            <BsTwitterX />
            <FaBehance />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Quick Links</h2>
          <Link className="leading-relaxed" href="">
            Home
          </Link>
          <Link className="leading-relaxed" href="">
            Services
          </Link>
          <Link className="leading-relaxed" href="">
            About Us
          </Link>
          <Link className="leading-relaxed" href="">
            Contact
          </Link>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="font-bold mb-2">Sevices</h2>
          <p className="leading-relaxed">Web Development</p>
          <p className="leading-relaxed">Graphic Design</p>
          <p className="leading-relaxed">Digital Marketing</p>
          <p className="leading-relaxed">Branding</p>
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
