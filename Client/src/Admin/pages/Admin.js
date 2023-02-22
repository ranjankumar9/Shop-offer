import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../components/Admin/AdminLayout";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu";

const Admin = () => {
  return (
    <Flex
      gap="30px"
      justify={"space-between"}
      bg="gray.50"
      border="1px solid blue"
    >
      {/* <AdminLayout /> */}
      <AdminMenu />
      <Box w="70%" border="1px solid black" position="relative">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Admin;
