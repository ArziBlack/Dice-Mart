"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { GENERATOR, TV } from "@/app/constants/images";

const SlideOne = () => {
  return (
    <div className="slide-one bg-white rounded-md w-[240px] flex flex-col items-start justify-between h-[350px]">
      <div className="flex flex-col items-start justify-between">
        <Image
          src={GENERATOR}
          alt="generator"
          className="w-full h-[220px] object-cover rounded-md"
        />
        <div className="flex flex-col items-start h-full px-2 py-4 text-sm w-full">
          <h2 className="font-[800] py-1">Galaxy Note 5 pro</h2>
          <div className="flex w-full justify-between items-center">
            <span className="font-[800]">$14,000</span>
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
  );
};

const SlideTwo = () => {
  return (
    <div className="slide-one bg-white rounded-md w-[240px] h-[350px] flex flex-col items-start justify-between">
      <div className="flex flex-col items-start justify-between w-full">
        <Image
          src={TV}
          alt="generator"
          className="w-full h-[220px] object-cover rounded-md"
        />
        <div className="flex flex-col items-start h-full px-2 py-4 text-sm w-full">
          <h2 className="font-[800] py-1">Galaxy Note 5 pro</h2>
          <div className="flex w-full justify-between items-center">
            <span className="font-[800]">$14,000</span>
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
  );
};

const SponsoredProducts = () => {
  return (
    <div className="flex flex-col my-7 mx-7 mt-14 pb-5">
      <h2 className="mb-5">Sponsored Products</h2>
      <div className="w-full flex">
        {/* <div></div> */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: false }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideTwo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SponsoredProducts;