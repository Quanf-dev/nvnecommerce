import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">Chúng tôi không tìm thấy trang.</p>

        <Link
          to={"/"}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white rounded bg-primary hover:bg-primary-light focus:outline-none focus:ring"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
