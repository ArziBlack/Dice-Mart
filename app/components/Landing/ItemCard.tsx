/* eslint-disable @next/next/no-img-element */
import Image, { StaticImageData } from 'next/image';
import React from 'react'

type ItemProps = {
    image: string | StaticImageData | undefined;
    item: string;
    price: string;
}
const ItemCard = ({ image, item, price}: ItemProps) => {
  return (
    <div className="slide-one bg-white rounded-md w-[240px] flex flex-col items-start justify-between h-[350px]">
      <div className="flex flex-col items-start justify-between">
        <Image
          src={image as string}
          alt="generator"
          className="w-full h-[220px] object-cover rounded-md"
        />
        <div className="flex flex-col items-start h-full px-2 py-4 text-sm w-full">
          <h2 className="font-[800] py-1">{item}</h2>
          <div className="flex w-full justify-between items-center">
            <span className="font-[800]">${price}</span>
            <span className="p-1 bg-stone-500 px-3 rounded-2xl text-white">
              -24%
            </span>
          </div>
          <span className="text-stone-500 pt-1">
            <s>70,000</s>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemCard