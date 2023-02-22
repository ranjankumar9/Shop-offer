import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCategory from "../Admin/components/Admin/CreateCategory";
import CreateProduct from "../Admin/components/Admin/CreateProduct";
import Orders from "../Admin/components/Admin/Orders";
import Products from "../Admin/components/Admin/Products";
import Users from "../Admin/components/Admin/Users";
import Layout from "../Admin/components/Layout/Layout";
// import AdminLayout from "../Admin/components/Admin/AdminLayout";
// import Admin from "../Admin/pages/AdminLayout";
import Home from "../Admin/pages/Home";
import NotFound from "../Admin/pages/NotFound";
import Admin from "../Admin/pages/Admin";
import AdminProfile from "./../Admin/components/Admin/AdminProfile";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Admin />}>
          <Route path="/admin" element={<AdminProfile />} />
          <Route path="/admin/create-category" element={<CreateCategory />} />
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
