import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import CarouselBottom from "../Components/Carousel/CarouselBottom";
import Footer from "../Components/Layout/Footer";
import NavbarMain from "../Components/NavbarMain";
import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
      }}
    >
      <Flex gap="20px" py="20px" px={{ base: "0px", lg: "20px" }}>
        <Sidebar />
        <Flex direction="column" w={{ base: "100%", lg: "80%" }}>
          <Carousel />
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
