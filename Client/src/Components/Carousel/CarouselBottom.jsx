import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselBottom = () => {
  return (
    <div className="carousel-2">
      <h1
        style={{
          fontSize: "30px",
          justifyItems: "left",
          marginBottom: "10px",
        }}
      >
        Trending Products
      </h1>
      <div className="slider-wrapper">
        <Swiper
          navigation={true}
          pagination={true}
          loop={true}
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper-2"
        >
          <SwiperSlide>
            <img
              src="/images/sl1.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl2.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl4.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl5.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl6.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl7.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl8.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl9.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl10.webp"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl11.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl12.webp"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/sl13.jpeg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselBottom;
