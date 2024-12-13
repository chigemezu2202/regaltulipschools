import React, { useState } from "react";
import LogoImg from "../assets/images/logo-black.png";
import { LinkData } from "../assets/data/dummydata";
import { Link, NavLink } from "react-router-dom";
import { BiServer, BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1, HiViewGrid } from "react-icons/hi";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full h-[4rem] py-4 text-[#ffffff] bg-[#38BDF8] shadow-md">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-6 logo">
            {/* <img src={LogoImg} alt='logo' className='h-5' /> */}
            <div className="font-sans font-extrabold text-blue-400">
              <img
                class="h-[40px] w-[40px] hover:h-[70px] hover:w-[70px] transition-all duration-300"
                src="images/Logo.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-3 text-sm category">
              <HiViewGrid className="text-[#563F1B] " size={20} />
              {/* <span>category</span> */}
            </div>
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary hover:text-[#7389fc] text-sm font-extrabold"
                        : "text-[15px] text-pink-700 hover:font-bold transition-colors hover:transition-all"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5 account ">
            <button>
              <BiServer className="text-[#563F1B]" size={25} />
            </button>
            <button className="text-pink-700 text-bold">
              {" "}
              <NavLink to="https://www.regaltulipschools.ng" className=" ">
                Portal
              </NavLink>
            </button>{" "}
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
