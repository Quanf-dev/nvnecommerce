import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { RiArrowRightSLine } from "@remixicon/react";

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

export default function HeroMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuOpen = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="flex flex-col flex-1 border-x-[1px] relative h-[392px]">
      {navData.map(({ id, text, subMenu }) => (
        <div
          key={id}
          onMouseEnter={() => handleMenuOpen(id)}
          onMouseLeave={() => handleMenuOpen(null)}
        >
          <Menu placement="right-start" open={openMenu === id} allowHover>
            <MenuHandler>
              <div
                variant="text"
                className="flex items-center justify-between w-full p-3 text-base font-medium border-b-[1px] focus:border-none "
              >
                {text}
                <RiArrowRightSLine />
              </div>
            </MenuHandler>
            <MenuList className="grid-cols-1 gap-3 overflow-visible lg:grid ">
              {subMenu.map((item) => (
                <MenuItem key={item} className="p-0 focus:bg-white ">
                  <Typography
                    variant="small"
                    color="gray"
                    className="w-full h-full p-2 font-normal hover:text-primary "
                  >
                    {item}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      ))}
    </div>
  );
}
