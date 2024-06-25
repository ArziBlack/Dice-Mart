"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { IMAGESLIDEONE } from "@/app/constants/images";
import { FaShoppingCart } from "react-icons/fa";

const FirstSlide = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={IMAGESLIDEONE}
        alt="image-slide"
        className="custom-height w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 rounded-lg flex justify-center flex-col h-full">
        <div className="flex flex-col h-[300px] justify-center text-white px-6 w-2/3 mb-20">
          <h2 className="text-3xl font-extrabold">
            Upgrade Your Essentials with our Currated collection
          </h2>
          {/* <p className="">Discover the best of the best in fashion, beauty, and lifestyle</p> */}
          <button className="w-[150px] flex items-center bg-[#55A4B2] justify-between p-2 rounded-md my-4">
            <p>Shop Now</p>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const SecondSlide = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={IMAGESLIDEONE}
        alt="image-slide"
        className="custom-height w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 rounded-lg flex justify-center flex-col h-full">
        <div className="flex flex-col h-[300px] justify-center text-white px-6 w-2/3 mb-20">
          <h2 className="text-3xl font-extrabold">
            Upgrade Your Essentials with our Quality collection
          </h2>
          {/* <p className="">Discover the best of the best in fashion, beauty, and lifestyle</p> */}
          <button className="w-[150px] flex items-center bg-[#55A4B2] justify-between p-2 rounded-md my-4">
            <p>Shop Now</p>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const ThirdSlide = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={IMAGESLIDEONE}
        alt="image-slide"
        className="custom-height w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 rounded-lg flex justify-center flex-col h-full">
        <div className="flex flex-col h-[300px] justify-center text-white px-6 w-2/3 mb-20">
          <h2 className="text-3xl font-extrabold">
            Upgrade Your Essentials with our Hand Picked collection
          </h2>
          {/* <p className="">Discover the best of the best in fashion, beauty, and lifestyle</p> */}
          <button className="w-[150px] flex items-center bg-[#55A4B2] justify-between p-2 rounded-md my-4">
            <p>Shop Now</p>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const ForthSlide = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={IMAGESLIDEONE}
        alt="image-slide"
        className="custom-height w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 rounded-lg flex justify-center flex-col h-full">
        <div className="flex flex-col h-[300px] justify-center text-white px-6 w-2/3 mb-20">
          <h2 className="text-3xl font-extrabold">
            Upgrade Your Essentials with our Awesome collection
          </h2>
          {/* <p className="">Discover the best of the best in fashion, beauty, and lifestyle</p> */}
          <button className="w-[150px] flex items-center bg-[#55A4B2] justify-between p-2 rounded-md my-4">
            <p>Shop Now</p>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full p-5 flex gap-5">
      <div className=" w-2/3 bg-orange-600">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <FirstSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SecondSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ThirdSlide />
          </SwiperSlide>
          <SwiperSlide>
            <ForthSlide />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" w-1/3 grid grid-cols-2 gap-2">
        <div className="bg-[#002F5D] rounded-md"></div>
        <div className="bg-[#002F5D] rounded-md"></div>
        <div className="bg-[#002F5D] rounded-md"></div>
        <div className="bg-[#002F5D] rounded-md"></div>
      </div>
    </div>
  );
};

export default Hero;
