import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../components/Admin/AdminLayout";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu";

const Admin = () => {
  return (
    <Flex
      gap="30px"
      justify={"space-between"}
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      bg="gray.50"
      border="1px solid blue"
    >
      <VStack
        className="nav-links"
        h="100vh"
        w="30%"
        border="1px solid red"
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
      >
        <AdminMenu />
      </VStack>
      <HStack
        className="mobile-nav-links"
        // h="100vh"
        w="100%"
        border="1px solid red"
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
      >
        <AdminMenu />
      </HStack>
      <Box
        w={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
        border="1px solid black"
        // position="relative"
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Admin;
