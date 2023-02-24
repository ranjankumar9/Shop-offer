import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMain from "./../NavbarMain";
import Footer from "./Footer";

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
