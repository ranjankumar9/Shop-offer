import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMain from "./../NavbarMain";
import Footer from "./Footer";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarMain />
    
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
