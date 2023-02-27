import React from "react";
import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FaRegCreditCard, FaShippingFast } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";

const CustomerServices = () => {
  return (
    <HStack
      className="hide-scrollbar"
      py="20px"
      //   border="1px solid red"
      // gap="10px"
      w={{ base: "99%", sm: "99%", md: "95%", lg: "80%" }}
      m="20px auto"
      overflowX="auto"
    >
      <Flex
        minW="200px"
        gap="15px"
        align={"center"}
        justify={"center"}
        // m="auto"
        // border="1px solid red"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <FaShippingFast fontSize={"25px"} />
        <Box>
          <Heading as="h6" size="xs">
            Free Shipping
          </Heading>
          <Text color="gray" fontSize={"13px"}>
            From all orders over $100
          </Text>
        </Box>
      </Flex>
      <Flex
        gap="15px"
        minW="200px"
        align={"center"}
        justify={"center"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <AiOutlineGift fontSize={"25px"} />
        <Box>
          <Heading as="h6" size="xs">
            Daily Surprise Offers
          </Heading>
          <Text color="gray" fontSize={"13px"}>
            Save up to 25% off
          </Text>
        </Box>
      </Flex>
      <Flex
        gap="15px"
        minW="200px"
        align={"center"}
        justify={"center"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <BiSupport fontSize={"25px"} />
        <Box>
          <Heading as="h6" size="xs">
            Support 24/7
          </Heading>
          <Text color="gray" fontSize={"13px"}>
            Shop with an expert
          </Text>
        </Box>
      </Flex>
      <Flex
        gap="15px"
        minW="200px"
        align={"center"}
        justify={"center"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <TbDiscount2 fontSize={"25px"} />
        <Box>
          <Heading as="h6" size="xs">
            Affordable Prices
          </Heading>
          <Text color="gray" fontSize={"13px"}>
            Get Factory direct price
          </Text>
        </Box>
      </Flex>
      <Flex
        minW="200px"
        gap="15px"
        align={"center"}
        justify={"center"}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
      >
        <FaRegCreditCard fontSize={"25px"} />
        <Box>
          <Heading as="h6" size="xs">
            Secure Payments
          </Heading>
          <Text color="gray" fontSize={"13px"}>
            100% Protected Payments
          </Text>
        </Box>
      </Flex>
    </HStack>
  );
};

export default CustomerServices;
