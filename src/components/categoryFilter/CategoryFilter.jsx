import { Slider, Typography } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";

const CategoryFilter = () => {
  const listCategory = [
    { name: "Ghế Giám Đốc", quantity: 43 },
    { name: "Ghế Trưởng Phòng", quantity: 29 },
    { name: "Ghế Nhân Viên", quantity: 162 },
    { name: "Ghế Công Thái Học", quantity: 134 },
    { name: "Ghế Phòng Họp", quantity: 55 },
    { name: "Ghế Ngồi Máy Tính", quantity: 47 },
    { name: "Ghế Băng Chờ", quantity: 119 },
    { name: "Ghế Chân Quỳ", quantity: 72 },
    { name: "Ghế Xoay", quantity: 53 },
    { name: "Ghế Lưới", quantity: 38 },
    { name: "Ghế Da Văn Phòng", quantity: 64 },
    { name: "Ghế Gaming", quantity: 28 },
    { name: "Bàn Học Sinh", quantity: 81 },
    { name: "Ghế Học Sinh", quantity: 36 },
    { name: "Bàn Ghế Bar – Cafe", quantity: 44 },
    { name: "Kệ Tivi", quantity: 25 },
  ];
  const listPrice = [
    "Dưới 50,000 VND",
    "Từ 50,000 đến 100,000 VND",
    "Từ 100,000 đến 500,000 VND",
    "Từ 500,000 đến 1,000,000 VND",
    "Từ 1,000,000 đến 5,000,000 VND",
    "Từ 5,000,000 đến 10,000,000 VND",
  ];
  const { nameCategory } = useContext(myContext);

  return (
    <div className="max-w-[250px] ">
      <Typography variant="h5" className="text-[#333] space-x-2 uppercase">
        Danh mục sản phẩm
      </Typography>
      <ul className="flex flex-col gap-4 mt-5 ">
        {listCategory.map((item, index) => (
          <li
            key={index}
            className={` ${
              nameCategory.toLocaleLowerCase().trim() ===
              item.name.toLocaleLowerCase().trim()
                ? "text-primary"
                : ""
            } duration-200 ease-linear transform text-[0.9rem] flex justify-between cursor-pointer  group hover:text-primary`}
          >
            {item.name}{" "}
            <span className="duration-200 ease-linear transform inline px-2  border-2 text-[0.75rem] group-hover:bg-primary group-hover:text-white rounded-full">
              {item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <Typography
        variant="h5"
        className="text-[#333] space-x-2 uppercase mt-10"
      >
        LỌC SẢN PHẨM THEO GIÁ
      </Typography>
      <ul className="flex flex-col gap-4 mt-5 ">
        {listPrice.map((item, index) => (
          <li
            key={index}
            className="duration-200 ease-linear transform text-[0.9rem] flex justify-between cursor-pointer  group hover:text-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
