import React from "react";
import SwiperCards from "../../../Utils/SwiperCards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const MyCourses = () => {
  return (
    <section className="rounded" style={{ height: "35svh", width: "95%" }}>
      <article className="my-3 mt-4">
        <h5 className="fw-semibold">MyCourses</h5>
      </article>

      <article className="h-100 ps-3">
        <SwiperCards
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="featured_cards_container mt-2 ms-3"
        >
          <SwiperSlide className="featured_cards card me-3">A</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">B</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">C</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">D</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">E</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">F</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">G</SwiperSlide>
          <SwiperSlide className="featured_cards card me-3">I</SwiperSlide>
        </SwiperCards>
      </article>
    </section>
  );
};

export default MyCourses;
