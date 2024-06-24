"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
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
      <div className="absolute inset-0 bg-black/25 rounded-lg flex items-center">
        <div className="flex flex-col h-[300px]">
            <h2>Upgrade Your Essentials with our Currated collection</h2>
            <p>Discover the best of the best in fashion, beauty, and lifestyle</p>
            <button>
                <p>Shop Now</p>
                <FaShoppingCart/>
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
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <FirstSlide />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      <div className=" w-1/3 bg-teal-600">
        <h2>Hero</h2>
      </div>
    </div>
  );
};

export default Hero;
