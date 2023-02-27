import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import CarouselBottom from "../Components/Carousel/CarouselBottom";
import CustomerServices from "../Components/CustomerServices/CustomerServices";
import Footer from "../Components/Layout/Footer";
import NavbarMain from "../Components/Layout/NavbarMain";
import PopularProducts from "../Components/PopularProducts/PopularProducts";
import Sidebar from "../Components/Sidebar";
import FeaturedCollection from "../FeaturedCollection/FeaturedCollection";
import "../Style/home.css";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <Flex gap="5px" py="20px" px={{ base: "0px", lg: "20px" }}>
        <Sidebar />
        <Flex direction="column" w={{ base: "100%", lg: "80%" }}>
          <Carousel />
          <CustomerServices />
          <PopularProducts />
          <FeaturedCollection />
        </Flex>
      </Flex>
      {/* <div className="sidebar-carousel-wrapper">
        {/* <Flex>
          <Sidebar />
          <Carousel />
        </Flex> */}

      {/* <div className="carousel-wrapper">
        <Carousel />
        <CarouselBottom />
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
