"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainImg = () => {
  return (
    <div className="main-slider">
      <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // 5 soniyada avtomatik slayd
        loop={true} // Cheksiz aylanish
      >
        <SwiperSlide>
          <img src="wmremove-transformed.png" alt="Rasm 1" className="mainimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="wmremove-transformed.png" alt="Rasm 2" className="mainimg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="wmremove-transformed.png" alt="Rasm 3" className="mainimg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainImg;
