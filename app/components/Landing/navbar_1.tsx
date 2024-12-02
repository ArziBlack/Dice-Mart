"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/app/utils/links";
import Dropdown from "../dropdown";

const Navbar_1 = () => {
  const [open, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen(!open);
  }
  return (
    <header className="max-w-screen">
      <nav className="fixed top-0 right-0 left-0 w-screen z-50">
        <div
          className={`bg-background/50 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg lg:px-6 py-2.5 mt-2 dark:bg-background/50 flex ${
            open && "flex-col"
          } justify-between items-center md:mx-auto max-w-screen-xl`}
        >
          <div className="flex gap-5">
            <Link href="#" className="flex items-center">
              <span
                className={`self-center ${
                  open && "pb-6"
                } text-base md:text-xl font-semibold whitespace-nowrap dark:text-white`}
              >
                BLACK DICE
              </span>
            </Link>
            {/* <ModeToggle /> */}
          </div>

          <div
            className={`flex ${
              open && "justify-between w-full"
            } items-center lg:order-2`}
          >
            <Dropdown />
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${open ? "hidden" : "block"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`${open ? "block" : "hidden"} w-6 h-6`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`block py-2 pr-4 pl-3
                         text-primary-700 dark:text-white
                          text-gray-700 dark:text-gray-400
                      } lg:p-0`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar_1;
