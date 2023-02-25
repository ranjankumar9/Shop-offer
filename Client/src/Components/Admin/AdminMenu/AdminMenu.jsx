import React from "react";
import { NavLink } from "react-router-dom";
import "../admin.css";
const AdminMenu = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      {/* <NavLink to="/admin">Admin</NavLink> */}
      {/* <NavLink to="/admin/create-category">Add Catgeory</NavLink> */}
      <NavLink to="/admin/create-product">Add Products</NavLink>
      <NavLink to="/admin/products">Products</NavLink>
      {/* <NavLink to="/admin/sellers">Sellers</NavLink> */}
      <NavLink to="/admin/orders">Orders</NavLink>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </>
  );
};

export default AdminMenu;
