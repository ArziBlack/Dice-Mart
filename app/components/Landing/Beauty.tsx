import { MONITOR } from "@/app/constants/images";
import React from "react";
import { FaCaretRight } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { StaticImageData } from "next/image";

const Beauty = () => {
  interface ItemDataProps {
    image: string | StaticImageData;
    item: string;
    price: string;
  }
  const itemData: ItemDataProps[] = [
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
    { image: MONITOR, item: "Nokia 250g", price: "500,000" },
  ];
  return (
    <div className="max-w-screen-2xl flex flex-col my-5">
      <div className="flex items-center justify-between py-3 px-5 w-full bg-[#00468B] text-white">
        <h2>Beauty and Skin Care Deals</h2>
        <div className="flex items-center">
          <span className="pr-2">See All</span>
          <FaCaretRight />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4 px-7">
        {itemData.map((item, idx) => (
          <ItemCard
            image={item.image}
            item={item.item}
            price={item.price}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Beauty;
