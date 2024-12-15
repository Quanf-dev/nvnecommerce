import { Rating } from "@material-tailwind/react";
import React from "react";
import AmountSelector from "./../../components/amountSelector/AmountSelector";
import {
  RiChat3Line,
  RiFacebookFill,
  RiLinkedinFill,
  RiMessage3Line,
  RiTelegram2Fill,
  RiTwitterFill,
} from "@remixicon/react";

const ProductDetails = ({ new_price, old_price, rating, warranty }) => {
  const features = [
    "Đèn chùm pha lê",
    "Đèn pha lê phòng ngủ",
    "Đèn thả bàn ăn hiện đại",
    "Đèn thả bằng đồng",
    "Đèn thả trần cao cấp",
    "Đèn thả trần hiện đại",
    "Đèn trang trí bằng đồng",
    "Đèn trang trí nghệ thuật",
  ];
  return (
    <div className="w-full px-4 md:w-1/2">
      <h2 className="mb-2 text-3xl font-bold">Premium Wireless Headphones</h2>
      <div className="flex gap-2 mb-4">
        <span className="flex items-center text-xl text-gray-500 line-through ">
          {old_price}&nbsp;
          <span className="text-[1rem] ">₫</span>
        </span>
        <span className="mr-2 text-xl font-bold text-primary">
          {new_price}{" "}
          <span className="relative bottom-1  right-1 text-[1rem]"> ₫</span>
        </span>
      </div>
      <div className="flex items-center mb-4">
        <Rating value={rating} readonly />
      </div>
      <ul className="flex flex-col gap-1">
        <li className="flex justify-between border-b-2 border-dotted text-[0.9rem] pb-1">
          <p className="font-bold">Bảo hành</p>
          <p className="text-textDesc">{warranty}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Vật liệu</p>
          <p className="text-textDesc">{warranty}</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Bảo hành</p>
          <p className="text-textDesc">1 năm</p>
        </li>
        <li className="flex justify-between border-b-2 border-dotted text-[0.95rem] pb-1">
          <p className="font-bold">Bảo hành</p>
          <p className="text-textDesc">1 năm</p>
        </li>
      </ul>

      <div className="flex items-center gap-5 mt-5 mb-6">
        <h3 className="mb-2 font-semibold">Chọn màu:</h3>
        <div className="relative flex space-x-2 bottom-1">
          <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
          <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
        </div>
      </div>

      <div className="flex items-center h-10 mb-6 space-x-4">
        <AmountSelector />
        <button className="flex items-center h-full gap-2 px-6 text-white rounded-md bg-primary">
          Thêm vào giỏ hàng{" "}
        </button>
        <button className="flex items-center h-full gap-2 px-6 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 ">
          <RiChat3Line />
          Chat Zalo
        </button>
      </div>
      <div>
        <button className="w-full gap-2 px-6 py-1 text-center text-white rounded-md bg-primary">
          <span className="font-bold ">MUA NGAY</span> <br />
          <span className="text-[0.9rem] relative bottom-[2px]">
            Gọi điện xác nhận và giao hàng tận nơi
          </span>
        </button>
      </div>

      <div className="mt-2 border-b-[1px] border-textBackground-light"></div>

      <div className="text-[0.9rem] flex flex-col gap-2 mt-4">
        {/* kết hợp tất cả các mục trong mảng features lại thành một chuỗi, sử dụng dấu phẩy và khoảng trắng làm tách. */}
        <p className="font-bold">
          Mã: <span className="font-normal leading-6 text-textDesc"></span>{" "}
        </p>
        <p className="font-bold">
          Danh mục:{" "}
          <span className="font-normal leading-6 text-textDesc"></span>{" "}
        </p>
        <p className="font-bold">
          Từ khóa:{" "}
          <span className="font-normal leading-6 text-textDesc">
            {features.join(", ")}
          </span>{" "}
        </p>
        <p className="flex font-bold ">
          Share:{" "}
          <span className="flex gap-2 ml-2 font-normal leading-6 text-textDesc">
            <RiFacebookFill size={18} className="cursor-pointer" />
            <RiTelegram2Fill size={18} className="cursor-pointer" />
            <RiTwitterFill size={18} className="cursor-pointer" />
            <RiLinkedinFill size={18} className="cursor-pointer" />
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
