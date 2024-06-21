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
            <div className="items-center grid grid-cols-3 gap-2">
              {/* The Input Bar */}
              <div className="flex items-center p-2 border border-[#65A4E2] rounded max-w-[540px] w-full col-span-2">
                <FaSearch />
                <input placeholder="search here..." className="border-none bg-inherit outline-none ml-2 w-full flex" />
              </div>
              {/* The search button */}
              <button className="bg-[#55A4B2] p-2 col-span-1 rounded">Search</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center">
              <p>Account</p>
              <FaUser />
            </div>
            <div className="flex items-center">
              <FaQuestionCircle />
              <select name="" id="">
                <option value="Help">Help</option>
                <option value="FAQ">FAQ</option>
              </select>
            </div>
            <div className="flex items-center">
              <span>Cart</span>
              <FaCartShopping />
            </div>
          </div>
        </div>
      </nav>
      <SubNavbar />
    </div>
  );
};

export default Navbar;
