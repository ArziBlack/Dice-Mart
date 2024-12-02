"use client";
import React, { useState } from "react";
import Dropdown from "../dropdown";
import CheckoutDropdown from "../checkout-dd";
import { navLinks } from "@/app/utils/links";

const Navbar_2 = () => {
  const [open, _] = useState(false);
  return (
    <header className="max-w-screen">
      <nav className="fixed top-0 right-0 left-0 w-screen z-50">
        <div
          className={`bg-background/50 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg lg:px-6 py-2.5 mt-2 dark:bg-background/50 flex ${
            open && "flex-col"
          } justify-between items-center md:mx-auto max-w-screen-xl`}
        >
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="#" title="" className="">
                <img
                  className="block w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
                <img
                  className="hidden w-auto h-8 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt=""
                />
              </a>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:space-x-2">
            <CheckoutDropdown />
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar_2;
