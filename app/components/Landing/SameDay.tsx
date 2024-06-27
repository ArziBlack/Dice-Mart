import { MONITOR } from '@/app/constants/images'
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import ItemCard from "../Landing/ItemCard"
import { StaticImageData } from 'next/image';

interface ItemDataProps {
    image: string | StaticImageData;
    item: string;
    price: string;
} 
const itemData: ItemDataProps[] = [
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
    {image: MONITOR, item: "Nokia 250g", price: "500,000"},
]
const SameDay = () => {
  return (
    <div className='px-7 flex flex-col'>
        <div className="flex items-center justify-between py-3 px-5 w-full bg-[#55A4B2] text-white">
        <h2>Same Day Delivery</h2>
        <div className="flex items-center p-2 bg-[#6F844C] rounded-md">
          <span className="pr-2">T & C Apply</span>
          <FaInfoCircle/>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {itemData.map((item, idx)=> (
            <ItemCard image={item.image} item={item.item} price={item.price} key={idx}/>
        ))}
      </div>
    </div>
  )
}

export default SameDay