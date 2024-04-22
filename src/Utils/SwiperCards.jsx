import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function SwiperCards() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="featured_cards_container"
      >
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 6
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 7
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 8
        </SwiperSlide>
        <SwiperSlide className="featured_cards card h-100 w-25 me-3">
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
}
