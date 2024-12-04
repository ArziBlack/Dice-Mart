import React from "react";
import Image from "next/image";
import { FaMessage } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="px-7 w-full bg-[#00172E]">
      <div className="bg-dark text-white py-5 grid grid-cols-3 gap-3">
        <div className="flex items-start self-start">
          <Image
            src="/assets/dice-logo.png"
            height="100"
            width={250}
            alt="logo"
            className="h-full w-full"
          />
        </div>
        <div></div>
        <div className="text-lg flex flex-col">
          <div className="flex flex-col">
            <h2 className="py-2">NEED BLACK DICE ?</h2>
            <span className="py-2 text-sm">
              Subscribe to our newsletter to get updates on our latest offers!
            </span>
          </div>
          <div className="flex items-center justify-center border my-3 px-3 py-2 rounded-md bg-white text-stone-500">
            <FaMessage className="" />
            <input
              placeholder="Your Email..."
              className="bg-transparent w-full outline-none text-xs  pl-2"
            />
          </div>
          <div className="flex py-3 items-start">
            <input type="checkbox" name="" id="" className="mt-1" />
            <div className="flex flex-wrap text-sm pl-3">
              <span>
                I agree to Black dice Privacy and Cookie Policy.
                <br /> You can unsubscribe from newsletters at any time
              </span>
              <span>I accept the Legal Terms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
