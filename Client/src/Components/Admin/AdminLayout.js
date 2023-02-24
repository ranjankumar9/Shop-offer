import React from "react";
import { Outlet } from "react-router-dom";
import AdminMenu from "./AdminMenu/AdminMenu";

const AdminLayout = () => {
  return (
    <div>
      <AdminMenu />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
