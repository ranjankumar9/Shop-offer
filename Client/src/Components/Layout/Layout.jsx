import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarMain from './NavbarMain';

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
