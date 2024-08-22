import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "./assets/logo-01.png"

function Navigation() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);

  return (
    // Navigation bar on large screen
    <div className="relative top-0 left-0 w-screen bg-gray-100 h-[70px] z-10 drop-shadow-lg">
      <div className="w-full h-full flex justify-between items-center px-4 max-w-screen-xl mx-auto">
        <div className="flex gap-10 items-center">
          
          <h1 className="text-3xl font-bold text-black sm:text-4xl ml-0">
            OneStop
          </h1>
          <ul className="hidden text-black md:flex gap-8">
            <Link
              to="/"
              className="cursor-pointer hover:bg-black hover:text-white hover:rounded-lg py-1 px-2"
            >
              Home
            </Link>
            <Link
              to="/service"
              className="cursor-pointer relative group hover:bg-black hover:text-white hover:rounded-lg py-1 px-2"
            >
              Services
            </Link>
            <Link
              to="/package"
              className="cursor-pointer relative group hover:bg-black hover:text-white hover:rounded-lg py-1 px-2"
            >
              Package
            </Link>
            <Link
              to="/tc"
              className="cursor-pointer relative group hover:bg-black hover:text-white hover:rounded-lg py-1 px-2"
            >
              Training center
            </Link>
            <Link
              to="/book"
              className="cursor-pointer relative group hover:bg-black hover:text-white hover:rounded-lg py-1 px-2"
            >
              Book an Appointment
            </Link>
          </ul>
        </div>
        <div className="hidden md:flex pr-4"></div>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-black" />
          ) : (
            <XIcon className="w-5 text-black" />
          )}
        </div>
      </div>

      {/* Navigation on small screens */}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-4"}>
        <li
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-2"
        >
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-2"
        >
          <Link to="/service" onClick={handleClose}>
            Services
          </Link>
        </li>
        <li
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-2"
        >
          <Link to="/package" onClick={handleClose}>
            Package
          </Link>
        </li>
        <li
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-2"
        >
          <Link to="/tc" onClick={handleClose}>
            Training center
          </Link>
        </li>
        <li
          onClick={handleClose}
          className="border-b-2 border-zinc-300 w-full py-2"
        >
          <Link to="/book" onClick={handleClose}>
            Book an Appointment
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
