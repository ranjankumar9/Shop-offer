import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../admin.css";
const AdminMenu = () => {
  return (
    <>
      {/* <NavLink to="/admin">Admin</NavLink> */}
      {/* <NavLink to="/admin/create-category">Add Catgeory</NavLink> */}
      <NavLink to="/admin/create-product">Add Products</NavLink>
      <NavLink to="/admin/products">Products</NavLink>
      <NavLink to="/admin/sellers">Sellers</NavLink>
      <NavLink to="/admin/orders">Orders</NavLink>
    </>
  );
};

export default AdminMenu;
