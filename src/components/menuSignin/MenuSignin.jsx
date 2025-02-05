import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuthNavigate from "../../hooks/useAuthNavigate";

const MenuSignin = () => {
  const { goToMyAccount } = useAuthNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-[21.875rem]">
      <div className="w-full max-w-sm p-6 ">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-center text-gray-700 text-nowrap">
            Đăng nhập
          </h2>
          <p
            onClick={() => goToMyAccount("register")}
            className="flex items-center cursor-pointer text-primary hover:text-primary-light focus:outline-none"
          >
            Bạn chưa có tài khoản?
          </p>
        </div>
        <div className="w-full h-0 mt-2 border-t-2"></div>
        <form className="mt-4">
          <div className="mb-4">
            <Input color="gray" label="Email" type="text" />
          </div>
          <div className="mb-4">
            <Input color="gray" label="Mật khẩu" type="password" />
          </div>
          <Button className="w-full px-4 py-2 text-white rounded-md hover:shadow-none bg-primary hover:bg-primary-light">
            Đăng nhập
          </Button>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="text-primary form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">Lưu thông tin</span>
            </label>
            <a href="#" className="text-sm text-primary hover:underline">
              Quên mật khẩu?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuSignin;
