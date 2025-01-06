import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";

const navData = [
  {
    id: 1,
    text: "Bàn văn phòng",
    url: "/signup",
    subMenu: ["Bàn giám đốc", "Bàn nhân viên", "Bàn máy tính"],
  },
  {
    id: 2,
    text: "Ghế văn phòng",
    url: "/",
    subMenu: ["Ghế Giám Đốc", "Ghế Nhân Viên", "Ghế Xoay"],
  },
  {
    id: 3,
    text: "Bàn ghế Gaming",
    url: "/",
    subMenu: ["Bàn Gaming Z-Desk", "Ghế Gaming Extreme Zero"],
  },
  {
    id: 4,
    text: "Bàn ghế khác",
    url: "/",
    subMenu: ["Bàn Học Sinh", "Ghế Học Sinh", "Kệ Tivi"],
  },
  {
    id: 5,
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
    <div className="flex flex-col flex-1 border-[1px] relative">
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
                className="flex items-center justify-between w-full p-3 text-base font-semibold border-b-[1px] focus:border-none "
              >
                {text}
                <RiArrowRightSLine />
              </div>
            </MenuHandler>
            <MenuList className="grid-cols-1 gap-3 overflow-visible lg:grid ">
              {subMenu.map((item) => (
                <MenuItem key={item}>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal "
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
