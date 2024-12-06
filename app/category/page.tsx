import React from "react";
import { ASSESSORIES, FASHION, TABLECOOKER } from "@/app/constants/images";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const categories = [
    { name: "Fashion", image: FASHION },
    { name: "Funitures", image: TABLECOOKER },
    { name: "Fashion", image: FASHION },
    { name: "Assessories", image: ASSESSORIES },
    { name: "Fashion", image: FASHION },
    { name: "Assessories", image: ASSESSORIES },
    { name: "Fashion", image: FASHION },
    { name: "Vehicle Parts", image: TABLECOOKER },
    { name: "Assessories", image: ASSESSORIES },
    { name: "Funitures", image: TABLECOOKER },
  ];
  return (
    <div className=" max-w-screen-2xl px-7 flex flex-col mt-24">
      <div className="flex items-start justify-between py-3 px-5 w-full bg-[#00468B] text-white mb-3">
        <h2>Explore All Categories</h2>
      </div>
      <div className="grid grid-cols-6 gap-5 mt-5">
        {categories.map((category, index) => (
          <Link
            href={`/products/${category.name}`}
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="w-[220px] h-[220px] rounded-full">
              <Image
                src={category.image}
                alt={category.name}
                className="w-[220px] h-[220px] rounded-full"
              />
            </div>
            <h2 className="text-2xl font-light mt-3 text-black-900">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
