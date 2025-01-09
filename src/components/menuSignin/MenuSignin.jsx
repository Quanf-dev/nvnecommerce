import React from "react";
import { Button, Input } from "@material-tailwind/react";

const MenuSignin = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full max-w-sm p-6 ">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign in
        </h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Tên tài khoản hoặc địa chỉ email *
            </label>
            <Input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Mật khẩu *
            </label>
            <Input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-yellow-500 form-checkbox"
              />
              <span className="ml-2 text-sm text-gray-600">Lưu thông tin</span>
            </label>
            <a href="#" className="text-sm text-yellow-500 hover:underline">
              Quên mật khẩu?
            </a>
          </div>
          <Button className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
            LOG IN
          </Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Bạn chưa có tài khoản?{" "}
          <a href="#" className="text-yellow-500 hover:underline">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default MenuSignin;
