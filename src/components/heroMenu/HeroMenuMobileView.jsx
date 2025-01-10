import React, { useState } from "react";
import { Collapse, Typography, Button } from "@material-tailwind/react";
import {
  RiArrowDownSLine,
  RiSearch2Line,
  RiUser2Line,
  RiUserLine,
} from "@remixicon/react";

const navData = [
  {
    id: 1,
    text: "Ghế văn phòng",
    url: "/",
    subMenu: ["Ghế Giám Đốc", "Ghế Nhân Viên", "Ghế Xoay"],
  },
  {
    id: 2,
    text: "Ghế gaming",
    url: "/",
    subMenu: ["Ghế Giám Đốc", "Ghế Nhân Viên", "Ghế Xoay"],
  },
  {
    id: 3,
    text: "Ghế công thái học",
    url: "/",
    subMenu: ["Ghế Giám Đốc", "Ghế Nhân Viên", "Ghế Xoay"],
  },
  {
    id: 4,
    text: "Bàn văn phòng",
    url: "/signup",
    subMenu: ["Bàn giám đốc", "Bàn nhân viên", "Bàn máy tính"],
  },
  {
    id: 5,
    text: "Bàn Gaming",
    url: "/",
    subMenu: ["Bàn Gaming Z-Desk", "Ghế Gaming Extreme Zero"],
  },
  {
    id: 6,
    text: "Tủ văn phòng",
    url: "/",
    subMenu: ["Bàn Học Sinh", "Ghế Học Sinh", "Kệ Tivi"],
  },
  {
    id: 7,
    text: "Sofa bàn trà",
    url: "/",
    subMenu: ["Bàn Học Sinh", "Ghế Học Sinh", "Kệ Tivi"],
  },
  {
    id: 8,
    text: "Gear - phụ kiện",
    url: "/",
    subMenu: ["Tai nghe", "Chuột", "Bàn phím"],
  },
];

export default function HeroMenuMobileView() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <aside>
      <div class="w-full max-w-sm min-w-[200px]">
        <div class="relative">
          <input
            className="w-full py-6 pl-3 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm placeholder:text-slate-400 text-slate-700 border-slate-200 pr-28 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
            placeholder="Tìm kiếm sản phẩm"
          />
          <RiSearch2Line
            size={24}
            color="gray"
            className="absolute right-3 top-1/3"
          />
        </div>
      </div>
      {navData.map((category, index) => (
        <div key={index} className="w-full ">
          <div
            variant="text"
            className="uppercase flex pl-5 justify-between items-center w-full text-left h-12 text-black active:bg-gray-50 hover:bg-white hover:text-primary border-y-[1px] border-gray-200 cursor-pointer"
            onClick={() => handleCategoryClick(index)}
          >
            {category.text}
            <div
              className={` ${
                openCategory === index ? "bg-primary text-white" : ""
              } border-l-[1px] h-full flex items-center px-3 text-gray-500`}
            >
              <RiArrowDownSLine
                className={`transform duration-200 ${
                  openCategory === index ? "-rotate-0" : "-rotate-90"
                }`}
              />
            </div>
          </div>
          <Collapse open={openCategory === index}>
            {category.subMenu.map((item, itemIndex) => (
              <div className="border-b-[1px] pl-5 border-gray-200 w-full py-3">
                <Typography key={itemIndex} className="text-sm ">
                  {item}
                </Typography>
              </div>
            ))}
          </Collapse>
        </div>
      ))}
      <div
        variant="text"
        className="uppercase flex pl-5  gap-2 items-center w-full text-left h-12 text-black active:bg-gray-50 hover:bg-white hover:text-primary border-y-[1px] border-gray-200 cursor-pointer"
      >
        <RiUserLine size={20} color="gray" />
        Đăng nhập / Đăng ký
      </div>
    </aside>
  );
}
