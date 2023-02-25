import React from "react";
import Carousel from "./Carousel/Carousel";
import CarouselBottom from "./Carousel/CarouselBottom";
import NavbarMain from "./NavbarMain";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <NavbarMain />
      <div className="sidebar-carousel-wrapper">
        <Sidebar />
        <div className="carousel-wrapper">
          <Carousel />
          <CarouselBottom />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
