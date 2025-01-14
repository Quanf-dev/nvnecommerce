import React from "react";
import {
  RiFileList2Line,
  RiMapPinLine,
  RiUserLine,
  RiLogoutBoxLine,
} from "@remixicon/react";

const AccountHome = () => {
  const icons = [
    { icon: RiFileList2Line, label: "Đơn hàng" },
    { icon: RiMapPinLine, label: "Địa chỉ" },
    { icon: RiUserLine, label: "Tài khoản" },
    { icon: RiLogoutBoxLine, label: "Logout" },
  ];

  return (
    <div className="w-full p-8">
      <p className="mb-4">
        Xin chào <span className="font-bold">admin</span> (không phải tài khoản{" "}
        <span className="font-bold">admin</span>? Hãy thoát ra và đăng nhập vào
        tài khoản của bạn)
      </p>
      <p className="mb-8">
        Từ trang quản lý tài khoản bạn có thể xem{" "}
        <span className="font-bold">đơn hàng mới</span>, quản lý{" "}
        <span className="font-bold">địa chỉ giao hàng và thanh toán</span>, và
        sửa mật khẩu và thông tin tài khoản.
      </p>
      <div className="grid grid-cols-3 gap-5">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 transition-colors duration-300 bg-white border rounded-lg shadow-sm cursor-pointer group hover:bg-gray-100"
          >
            <div className="text-center">
              <item.icon
                size={60}
                className="text-gray-500 group-hover:text-primary"
              />
              <p className="mt-2 font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountHome;
