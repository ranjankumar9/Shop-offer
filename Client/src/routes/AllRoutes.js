import React from "react";
import { Route, Routes } from "react-router-dom";
// import CreateCategory from "../Admin/components/Admin/AddCategory/CreateCategory";
import NotFound from './../pages/NotFound';
import Layout from './../Components/Layout/Layout';
import HomePage from './../pages/HomePage';
import Admin from './../pages/Admin';
import AdminProfile from './../Components/Admin/AdminProfile/AdminProfile';
import CreateProduct from './../Components/Admin/AddProduct/CreateProduct';
import Products from './../Components/Admin/Products';
import Users from './../Components/Admin/Sellers/Sellers';
import Orders from './../Components/Admin/Orders/Orders';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/" element={<Admin />}>
          <Route path="/admin" element={<AdminProfile />} />
          {/* <Route path="/admin/create-category" element={<CreateCategory />} /> */}
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/sellers" element={<Users />} />
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
