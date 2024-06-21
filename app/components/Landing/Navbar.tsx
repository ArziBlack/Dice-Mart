import React from "react";
import SubNavbar from "./SubNavbar";
import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import { FaCartShopping, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-[#003A74] w-full flex items-center pt-7 flex-col max-w-[1480px] min-w-[1366px]">
      <nav className="px-5 grid grid-cols-4 gap-4 p-4 w-full">
        {/* The Logo Header, Section 1 */}
        <h2 className="col-span-1 text-left">BLACKDICE</h2>
        {/* Section 2 */}
        <div className="col-span-3 flex items-center justify-between w-full">
          {/* The Search Bar */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              {/* The Input Bar */}
              <div className="flex items-center">
                <FaSearch />
                <input placeholder="search here..." />
              </div>
              {/* The search button */}
              <button>Search</button>
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
