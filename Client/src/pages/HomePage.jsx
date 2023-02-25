import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import CarouselBottom from "../Components/Carousel/CarouselBottom";
import Footer from "../Components/Layout/Footer";
import NavbarMain from "../Components/NavbarMain";
import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
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
