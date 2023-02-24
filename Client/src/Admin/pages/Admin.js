import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu";

const Admin = () => {
  return (
    <Flex
      gap="25px"
      justify={"space-between"}
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      bg="gray.50"
      border="1px solid blue"
    >
      <VStack
        className="nav-links"
        h="100vh"
        w="23%"
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
        // position="relative"
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Admin;
