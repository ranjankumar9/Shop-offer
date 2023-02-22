import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminLayout = () => {
  return (
    <div
    //  style={}
    >
      <AdminMenu />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
