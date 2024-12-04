"use client";
import React, { useState } from "react";
import Dropdown from "../dropdown";
import CheckoutDropdown from "../checkout-dd";
import { navLinks } from "@/app/utils/links";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar_2 = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="fixed top-0 right-0 left-0 w-screen z-50">
        <div
          className={`bg-main-200 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg lg:px-6 py-2.5 mt-2 dark:bg-main-600/50 flex justify-between items-center md:mx-auto max-w-screen-xl`}
        >
          {/* Logo and Hamburger Menu */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <span className="text-base md:text-xl font-semibold whitespace-nowrap dark:text-white">
                  BLACK DICE
                </span>
              </Link>
            </div>
            <button
              className="text-gray-900 dark:text-white lg:hidden focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <ul
            className={`hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  title=""
                  className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-2">
            <CheckoutDropdown />
            <Dropdown />
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-background/50 border border-border rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    title=""
                    className="block text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col space-y-4">
              <CheckoutDropdown />
              <Dropdown />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar_2;
