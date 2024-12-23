import { ASSESSORIES, FASHION, TABLECOOKER } from "@/app/constants/images";
import Image from "next/image";
import React from "react";

const Categories = () => {
  const categories = [
    { name: "Fashion", image: FASHION },
    { name: "Assessories", image: ASSESSORIES },
    { name: "Vehicle Parts", image: TABLECOOKER },
    { name: "Funitures", image: TABLECOOKER },
    { name: "Funitures", image: TABLECOOKER },
  ];
  return (
    <div className="max-w-screen-2xl flex flex-col mt-5">
      <div className="flex items-start justify-between py-3 px-5 w-full bg-[#00468B] text-white mb-3">
        <h2>Explore All Categories</h2>
      </div>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-[220px] h-[220px] rounded-full">
              <Image
                src={category.image}
                alt={category.name}
                className="w-[220px] h-[220px] rounded-full"
              />
            </div>
            <h2 className="text-2xl font-light mt-3">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
