import React from "react";
import logImg from "../assets/images/logo-black.png";
import { BsApple, BsGooglePlay, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { GiIncomingRocket } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <section className="relative z-10 flex w-4/5 m-auto mt-16 text-white rounded-lg app shadow-shadow2 md:flex-col bg-primary">
        <div className="left w-[60%] md:w-full p-10">
          <h1 className="text-4xl font-semibold leading-tight">Enroll now!</h1>
        </div>
        <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#FF7C54] md:bg-transparent md:p-8">
          <div className="flex items-center gap-2 px-5 py-3 text-white border rounded-sm box border-gray-50 hover:bg-white hover:text-black shadow-shadow1">
            <GiIncomingRocket />
            <label className="text-sm">Enroll Now!</label>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 text-black bg-white rounded-sm box shadow-shadow1">
            <AiOutlineBook />
            <label className="text-sm">
              <NavLink to={"/about "}>About Us</NavLink>
            </label>
          </div>
        </div>
      </section>
      <footer className="bg-[#F3F4F8] py-10 pt-32 -mt-24">
        <div className="container grid grid-cols-4 gap-5 md:grid-cols-2">
          <div className="logo">
            {/* <img src={logImg} alt='logImg' className='h-5' /> */}
            <div className="font-sans font-extrabold text-blue-400">
              <img class="h-[40px] w-[40px]" src="images/Logo.jpeg" alt="" />
            </div>
            <span className="text-[10px] font-bold ">
              At Regal Tulip School, we pride ourselves on being top-notch in
              academics, fostering a culture of excellence that inspires
              students to reach their full potential.
            </span>
          </div>

          <li>
            <h4 className="mb-5 text-sm font-semibold text-black">Site Link</h4>
            <NavLink to="#" className=" text-[14px] block mb-2 ">
              Contact
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Our team
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              Get in Touch
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              FAQ
            </NavLink>
          </li>
          <li className="flex flex-col items-center  ">
            <h4 className="mb-5 text-sm font-semibold text-black">Platform</h4>
            <NavLink to="#" className=" text-[14px] block mb-2">
              <FaFacebook className="h-[22px] w-[22px] text-blue-600" />
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              <BsTwitter className="h-[22px] w-[22px] text-sky-600" />
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              <BsWhatsapp className="h-[22px] w-[22px] text-green-600" />
            </NavLink>
            <NavLink to="#" className=" text-[14px] block mb-2">
              <FaLinkedin className="h-[22px] w-[22px] text-blue-600" />
            </NavLink>
          </li>
          <li>
            <h4 className="mb-5 text-sm font-semibold text-black">
              Active Days
            </h4>
            <NavLink to="#" className=" text-[14px] block mb-2">
              <ul>
                <li>Tuesday </li>
                <li>Wednesday </li>
                <li>Thursday </li>
                <li>Friday </li>
              </ul>
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  );
};
