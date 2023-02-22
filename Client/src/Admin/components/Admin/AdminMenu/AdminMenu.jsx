import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../admin.css";
const AdminMenu = () => {
  return (
    <VStack className="nav-links" h="100vh" w="30%" border="1px solid red">
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/admin/create-category">Add Catgeory</NavLink>
      <NavLink to="/admin/create-product">Add Products</NavLink>
      <NavLink to="/admin/products">Products</NavLink>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/orders">Orders</NavLink>
    </VStack>
  );
};

export default AdminMenu;
