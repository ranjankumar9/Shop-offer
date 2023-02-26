// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   ButtonGroup,
//   Divider,
//   Button,
//   Text,
//   Heading,
//   Stack,
//   Image,
//   Input,
// } from "@chakra-ui/react";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const Carousel = () => {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);

//   return (
//     <div className="carousel-1">
//       <div className="slider-wrapper">
//         <Swiper
//           display={{ base: "100%" }}
//           navigation={true}
//           pagination={true}
//           modules={[Autoplay, Pagination, Navigation]}
//           loop={true}
//           className="mySwiper-1"
//         >
//           <SwiperSlide>
//             <img
//               src="/images/slide2.jpg"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <img
//               src="/images/slide1.jpg"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <img
//               src="/images/slide3.jpg"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <img
//               src="/images/slide4.jpg"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             {" "}
//             <img
//               src="/images/slide5.jpg"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//       {/* <div className="pincode-card">
//         <Card
//           maxW="sm"
//           size={"sm"}
//           display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
//         >
//           <CardBody>
//             <Image
//               src="/images/lol.jpg"
//               alt="Green double couch with wooden legs"
//               borderRadius="md"
//               justifyContent={"center"}
//               height={"50%"}
//             />
//             <Stack mt="6" spacing="3">
//               <Heading size="sm">Your delievery Pincode</Heading>
//               <Text>
//                 Enter your Pincode to check availabilty and faster delievery
//                 option
//               </Text>
//               <Input color="blue.600" fontSize="2xl"></Input>
//             </Stack>
//           </CardBody>
//           <Divider />
//           <CardFooter>
//             <ButtonGroup spacing="2">
//               <Button variant="solid" bg="black" color={"white"}>
//                 Submit
//               </Button>
//               <Button variant="ghost" colorScheme="blue">
//                 Next
//               </Button>
//             </ButtonGroup>
//           </CardFooter>
//         </Card>
//       </div> */}
//     </div>
//   );
// };

// export default Carousel;

import React, { useState } from "react";
import { Box, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null > null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
  ];

  return (
    <Box
      position={"relative"}
      height={"400px"}
      width={"100%"}
      overflow={"hidden"}
      borderRadius={"3px"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="unstyled"
        color="white"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt fontSize={"25px"} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        variant="unstyled"
        color="white"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt fontSize={"25px"} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          // <Box
          //   key={index}
          //   height={"6xl"}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize="cover"
          //   backgroundImage={`url(${url})`}
          // />
          <Image key={index} src={url} alt="img-slider" h={350} w={"full"} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
