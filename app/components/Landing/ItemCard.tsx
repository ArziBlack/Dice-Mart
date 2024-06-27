/* eslint-disable @next/next/no-img-element */
import { StaticImageData } from 'next/image';
import React from 'react'

type ItemProps = {
    image: string | StaticImageData | undefined;
    item: string;
    price: string;
}
const ItemCard = ({ image, item, price}: ItemProps) => {
  return (
    <div className="bg-white flex rounded-md w-full">
          <div className="h-28 rounded-md bg-[#55A4B2] w-1/3">
            <img
              src={image as string}
              className="w-28 h-28 rounded-md"
              alt="product"
            />
          </div>
          <div className="flex flex-col justify-between h-full px-2 py-4 w-2/3 text-sm">
            <h2 className="font-[800]">{item}</h2>
            <div className="flex w-full justify-between items-center">
              <span className="font-[800]">${price}</span>
              <span className="p-1 bg-stone-500 px-3 rounded-2xl text-white">-24%</span>
            </div>
            <span className="text-stone-500"><s>70,000</s></span>
          </div>
        </div>
  )
}

export default ItemCard