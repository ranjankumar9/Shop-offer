import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "./../Components/Admin/AdminMenu/AdminMenu";

const Admin = () => {
  return (
    <Flex
      gap="5px"
      justify={"space-between"}
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      bg="gray.50"
      // py="40px"
      // my="40px"
      // border="1px solid blue"
    >
      <VStack
        className="nav-links"
        h="100vh"
        w="23%"
        py="20px"
        // border="1px solid red"
        bgColor="#fff"
        boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
        px="5px"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <AdminMenu />
      </VStack>
      <HStack
        className="mobile-nav-links"
        w="100%"
        py="20px"
        boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
        border="1px solid red"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <AdminMenu />
      </HStack>
      <Box
        w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
        // border="1px solid black"
        boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
        bgColor="#fff"
        py="20px"
        // position="relative"
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Admin;
