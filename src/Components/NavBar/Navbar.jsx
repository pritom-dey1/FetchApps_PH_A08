import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import Navbutton from "../Button/Navbutton";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white fixed w-full z-10 shadow">
      <div className="flex justify-between max-w-[1300px] mx-auto py-4 px-4 items-center">
        <Link className="flex items-center gap-2" to="/">
          <img className="w-10 object-cover" src={Logo} alt="Logo" />
          <h2 className="text-2xl font-semibold text-black">FetchApps</h2>
        </Link>

        <ul className="hidden md:flex gap-6 uppercase font-medium text-black">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600" : ""}>Home</NavLink>
          <NavLink to="/apps" className={({ isActive }) => isActive ? "text-indigo-600" : ""}>Apps</NavLink>
          <NavLink to="/installation" className={({ isActive }) => isActive ? "text-indigo-600" : ""}>Installation</NavLink>
        </ul>

        <div className="hidden md:flex gap-3">
          <a href="https://github.com/pritom-dey1" target="_blank" rel="noreferrer">
            <Navbutton btntext={"Contribute"} />
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 absolute w-full top-[72px] left-0">
          <ul className="flex flex-col gap-4 uppercase font-medium text-black">
            <NavLink onClick={() => setIsOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/apps">Apps</NavLink>
            <NavLink onClick={() => setIsOpen(false)} to="/installation">Installation</NavLink>
            <a href="https://github.com/pritom-dey1" target="_blank" rel="noreferrer">
              <Navbutton btntext={"Contribute"} />
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
