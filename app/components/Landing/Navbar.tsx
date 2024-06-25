'use client'
import React from "react";
import SubNavbar from "./SubNavbar";
import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#003A74] w-full flex items-center pt-4 flex-col max-w-[1480px] min-w-[1366px]">
      <nav className="px-5 grid grid-cols-4 gap-4 p-4 w-full items-center">
        {/* The Logo Header, Section 1 */}
        <h2 className="col-span-1 text-left text-[24px] font-bold text-white">BLACKDICE</h2>
        {/* Section 2 */}
        <div className="col-span-3 flex items-center justify-between w-full">
          {/* The Search Bar */}
          <div className="flex items-center justify-between w-full">
            <div className="items-center grid grid-cols-4 gap-2 w-full">
              {/* The Input Bar */}
              <div className="flex items-center p-2 border border-[#65A4E2] rounded max-w-[540px] w-full col-span-2">
                <FaSearch />
                <input placeholder="search here..." className="border-none bg-inherit outline-none ml-2 w-full flex" />
              </div>
              {/* The search button */}
              <button className="bg-[#55A4B2] p-2 col-span-1 rounded text-white">Search</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-white w-1/3 text-xs">
            <div className="flex items-center">
              <p className="pr-1">Account</p>
              <FaUser color="white" size={14} />
            </div>
            <div className="flex items-center bg-[#55A4B2] p-1 py-2 rounded-md">
              <FaQuestionCircle color="white" size={20} className="pr-1"/>
              <select name="" id="" className="bg-inherit border-none outline-none">
                <option value="Help">Help</option>
                <option value="FAQ">FAQ</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="pr-1">Cart</span>
              <FaCartShopping color="white" />
            </div>
          </div>
        </div>
      </nav>
      <SubNavbar />
    </div>
  );
};

export default Navbar;
