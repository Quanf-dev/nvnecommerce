import React from "react";
import {
  RiFileList2Line,
  RiMapPinLine,
  RiUserLine,
  RiLogoutBoxLine,
} from "@remixicon/react";
import Navbar from "../../components/navbar/Navbar";
import LayoutHome from "../../layout/LayoutHome";
import Track from "../../components/track/Track";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/pageTitle/PageTitle";
import { Link, Outlet } from "react-router-dom";
import Announcement from "../../components/announcement/Announcement ";

const UserDashboardPage3 = () => {
  const menuItems = [
    { label: "Trang tài khoản", href: "#" },
    { label: "Đơn hàng", href: "/my-account/orders" },
    { label: "Địa chỉ", href: "/my-account/edit-address" },
    { label: "Tài khoản", href: "/my-account/edit-account" },
    { label: "Logout", href: "/my-account/orders" },
  ];

  return (
    <>
      <Announcement />
      <Navbar />
      <PageTitle title={"My account"} />
      <LayoutHome>
        <div className="flex h-auto py-10">
          <div className="w-1/4 p-4 bg-white border-r-[1px]">
            <h2 className="mb-4 text-lg font-bold">MY ACCOUNT</h2>
            <ul className="text-[0.9rem] font-bold">
              {menuItems.map((item, index) => (
                <li key={index} className="hover:bg-gray-200">
                  <Link to={item.href} className="block p-2">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 min-h-[60vh] p-8 ">
            <Outlet /> {/* Nội dung con sẽ được render tại đây */}
          </div>
        </div>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default UserDashboardPage3;
