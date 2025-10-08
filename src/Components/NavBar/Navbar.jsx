import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import Navbutton from "../Button/Navbutton";
const Navbar = () => {
  return (
    <div className='bg-[#fff]  fixed w-full z-10'>
        <div className='flex justify-between max-w-[1300px] mx-auto py-4 w-[95%] items-center '>
          
            <div className='w-[20%] flex items-center'>
                  <img className="w-[40px] object-cover" src={Logo} alt="Logo" />
                <h2 className='text-2xl  font-semibold text-[#000]'>FetchApps</h2>
            </div>
            <div>
                <ul className='flex w-[60%] uppercase gap-6 font-medium text-[#000]'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink >Installation</NavLink>
                   
                </ul>
            </div>
            <div className='flex w-[20%] justify-end gap-3'>
            <a href="https://github.com/pritom-dey1" target='_blank'>
               <Navbutton btntext={"Contribute"}></Navbutton>
            </a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
