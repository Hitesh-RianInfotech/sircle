import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaCodiepie } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { BsStars } from "react-icons/bs";

const imageLinks = [
  { src: "/images/logo.png", alt: "Sircle Logo", className: "h-7" },
  { src: "/images/become.png", alt: "" },
  { src: "/images/1.png", alt: "Marketing", className: "rounded-lg shadow-lg" },
  { src: "/images/3.png", alt: "Designing", className: "rounded-lg shadow-lg" },
  { src: "/images/1.png", alt: "Editing", className: "rounded-lg shadow-lg" },
  { src: "/images/3.png", alt: "Storytelling", className: "rounded-lg shadow-lg" },
  { src: "/images/1.png", alt: "Writing", className: "rounded-lg shadow-lg" },
];

const HeroSection = () => {
  return (
   <div className="w-[95vw] m-auto  bg-[url('/images/grid.png')]">
<div
    className="rounded-2xl my-2 border border-gray-600 text-white py-12 flex flex-col items-center 
      gradient-purple">
                <div className="flex  items-center mb-10 justify-center gap-6 border border-white rounded-xl px-8 py-1">
          <img {...imageLinks[0]} />
          <div className="h-10 border-l border-white"></div>
          <div className="flex items-center gap-2">
            <CiLinkedin className="size-8 cursor-pointer" />
            <div className="flex flex-col ">
              <span className="text-xs font-semibold">LinkedIn</span>
              <span className="text-xs font-semibold">Glow Up</span>
            </div>
          </div>
        </div>
        <header className="max-w-[90vw] m-auto text-center">
          <img {...imageLinks[1]} />
          <p className="text-lg mt-6">
            and glow up in a month like you haven’t before
          </p>
        </header>

        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-14">
          <div className="gradient-purple2 hover:-translate-y-1 duration-300 cursor-pointer flex gap-2 items-center px-2 py-2 rounded-xl border border-gray-400">
            <IoLocationOutline className="size-5" />
            <span className="">OFFLINE</span>
          </div>
          <div className="gradient-purple2 hover:-translate-y-1 duration-300 cursor-pointer flex gap-2 items-center px-2 py-2 rounded-xl border border-gray-400">
            <FaCodiepie className="size-5" />
            <span className="">15 DAYS</span>
          </div>
          <div className="gradient-purple2 hover:-translate-y-1 duration-300 cursor-pointer flex gap-2 items-center px-2 py-2 rounded-xl border border-gray-400">
            <SlCalender className="size-5" />
            <span className="">SEPTEMBER</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {imageLinks.slice(2).map((image, index) => (
            <img key={index} {...image} className="cursor-pointer hover:scale-105 duration-300" />
          ))}
        </div>

        <div className="mt-10">
          <button className="gradient-purple2 hover:-translate-y-1 duration-300 flex gap-2 items-center px-4 py-3 rounded-xl border border-gray-400">
            <BsStars className="size-5" />
            <span className="">APPLY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;