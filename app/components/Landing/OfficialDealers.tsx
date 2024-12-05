import { VIVO, APPLE, LENOVO } from "../../constants/svg";
import Image from "next/image";
import React from "react";

const OfficialDealers = () => {
  const dealers = [
    { name: "Sir Pee", image: VIVO },
    { name: "Black Dice", image: APPLE },
    { name: "Franco", image: LENOVO },
    { name: "Sir Pee", image: VIVO },
    { name: "Alibaba", image: VIVO },
    { name: "Good and Fine", image: APPLE },
    { name: "Big Will", image: LENOVO },
    { name: "Good and Fine", image: APPLE },
  ];
  return (
    <div className="max-w-screen-2xl flex flex-col my-5">
      <div className="flex items-start justify-between py-3 px-5 w-full bg-[#00468B] text-white mb-3">
        <h2>Official Dealers</h2>
      </div>
      <div className="grid grid-cols-6 gap-6 mt-5 px-7">
        {dealers.map((category, index) => (
          <div
            key={index}
            className="flex w-full h-[120px] items-center justify-center rounded-md bg-white p-5"
          >
            <Image
              src={category.image}
              alt={category.name}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialDealers;
