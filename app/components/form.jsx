import { integralCf } from "@/app/fonts/fonts";
import React from "react";
import { FaLocationPinLock } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Button from "./one";

const Contact = () => {
  return (
    <div className="px-4 background flex flex-col h-screen justify-center items-center mt-20">
      <h1
        className={`text-white z-10 ${integralCf.className} text-4xl tracking-wider`}
      >
        Contact Us Today
      </h1>
      <div className="bg-transparent flex-col  z-10 justify-center items-center  relative  mt-10 rounded-lg w-full">
        <div className="px-4 text-white flex flex-col justify-center text-lg rounded-lg bg-red-500 h-1/2 w-full">
          <h1 className="text-2xl mb-4 font-bold">Contact Us</h1>
          <div className="flex items-center gap-4 mt-4">
            <FaLocationPinLock style={{ fontSize: "1rem" }} />
            <span>
              <h2>Thika Makongeni</h2>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <FaMailBulk style={{ fontSize: "1.5rem" }} />
            <span>
              <h2>info@nexacreative.com</h2>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <MdWifiCalling3 style={{ fontSize: "1.5rem" }} />
            <span>
              <h2>0797 710074</h2>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <BiLogoInstagramAlt style={{ fontSize: "1.5rem" }} />
            <span>
              <h2>@nexacreative</h2>
            </span>
          </div>
        </div>
        <div className="w-full px-4 right-20 flex justify-center items-center top-20">
          <form className="flex flex-col w-full" action="">
            <input
              className="rounded-lg h-10 px-4 py-5 placeholder:text-gray-400 placeholder:font-semibold bg-gray-300 mt-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="rounded-lg h-10 px-4 py-5 placeholder:text-gray-400 placeholder:font-semibold bg-gray-300 mt-4"
              placeholder="Your Email"
            />
            <textarea
              name=""
              className="rounded-lg px-4 py-5 placeholder:text-gray-400 placeholder:font-semibold bg-gray-300 mt-4"
              placeholder="Type your message here"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <Button
              name="SEND"
              className="bg-red-500 flex justify-center items-center font-semibold w-1/2 mt-4 rounded-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
