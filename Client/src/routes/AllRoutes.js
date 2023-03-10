import React from "react";
import { Route, Routes } from "react-router-dom";
// import CreateCategory from "../Admin/components/Admin/AddCategory/CreateCategory";
import NotFound from "./../pages/NotFound";
import Layout from "./../Components/Layout/Layout";
import HomePage from "./../pages/HomePage";
import Admin from "./../pages/Admin";
import AdminProfile from "./../Components/Admin/AdminProfile/AdminProfile";
import CreateProduct from "./../Components/Admin/AddProduct/CreateProduct";
import Orders from "./../Components/Admin/Orders/Orders";
import SellerRegister from "../pages/SellerRegister";
import SellerLogin from "../pages/SellerLogin";
import SellerProducts from "../Components/Admin/Products/SellerProducts";
import CartPage from "../pages/CartPage";
import SingleProduct from "./../pages/SingleProduct";
import Products from "../pages/Products";
import Form from "../pages/Payment";
import MyOrders from "../pages/MyOrders";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/seller/register" element={<SellerRegister />} />
      <Route path="/seller/login" element={<SellerLogin />} />

      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/singleproduct/:_id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/payment" element={<Form />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route exact path="/" element={<Admin />}>
          <Route path="/admin" element={<AdminProfile />} />
          {/* <Route path="/admin/create-category" element={<CreateCategory />} /> */}
          <Route path="/admin/create-product" element={<CreateProduct />} />
          <Route path="/admin/products" element={<SellerProducts />} />
          {/* <Route path="/admin/sellers" element={<Users />} /> */}
          <Route path="/admin/orders" element={<Orders />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
