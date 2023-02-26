import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Divider,
  Button,
  Text,
  Heading,
  Stack,
  Image,
  Input,
} from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
     
    <div className="carousel-1">
      <div className="slider-wrapper">
        <Swiper
          display={{ base: "100%" }}
          navigation={true}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="mySwiper-1"
        >
          <SwiperSlide>
            <img
              src="/images/slide2.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/slide1.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/slide3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/slide4.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src="/images/slide5.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pincode-card">
        <Card
          maxW="sm"
          size={"sm"}
          display={{ lg: "flex", md: "none", sm: "none", base: "none" }}
        >
          <CardBody>
            <Image
              src="/images/lol.jpg"
              alt="Green double couch with wooden legs"
              borderRadius="md"
              justifyContent={"center"}
              height={"50%"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="sm">Your delievery Pincode</Heading>
              <Text>
                Enter your Pincode to check availabilty and faster delievery
                option
              </Text>
              <Input color="blue.600" fontSize="2xl"></Input>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" bg="black" color={"white"}>
                Submit
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Next
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Carousel;
