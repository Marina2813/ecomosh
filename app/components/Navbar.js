"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";



const Navbar = () => {
    let [open, setOpen] = useState(false);
    let Links = [
      { name: "Home", link: "section1" },
      { name: "Timeline", link: "section3" },
      { name: "About", link: "section2" },
      { name: "Patners ", link: "section4" },
      { name: "Contact-Us", link: "section5" },
    ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
    <div
      className={`md:flex items-center justify-between bg-primary/60 py-2 md:px-10 px-7`}
    >
      <div className="font-extrabold md:font-bold md:text-3xl text-xl pt-2 cursor-pointer flex items-center font-[Poppins] text-textColor">
        ECOMOSH
        
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <ul
        className={`md:flex md:items-center md:pb-0 absolute md:static md:h-auto h-screen rounded-b-2xl text-center md:bg-transparent bg-primary md:z-auto z-[-1] w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
          open ? "left-0 bg-textColor " : "left-[100vh]"
        } flex md:flex-row flex-col justify-evenly items-center font-bold md:font-normal`}
      >
        {Links.map((link) => (
          <li key={link.name} className={`md:ml-8 text-lg ${open ? "text-primary " : "text-textColor"}  md:m-0 `}>
            <Link
              href={link.link} // Use the link property as the target section ID
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {link.name}
            </Link>
          </li>
          
        ))}
        </ul>
    </div>
  </div>
  )
}
export default Navbar

