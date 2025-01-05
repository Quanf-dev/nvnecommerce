import React from "react";
import Sidebar from "../components/admin/sideBar/SideBar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="relative flex w-screen py-6 mx-auto ">
      <Sidebar />
      {children}
    </div>
  );
};

export default LayoutAdmin;
