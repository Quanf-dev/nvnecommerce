import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiArrowDownSLine,
  RiMenuLine,
  RiShoppingBagLine,
  RiUserLine,
} from "@remixicon/react";
import { useSelector } from "react-redux";
import {
  Badge,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import MenuSignin from "../menuSignin/MenuSignin";
import myContext from "../../context/myContext";

const NavItem = ({ offsetActiveProduct }) => {
  const cartItems = useSelector((state) => state.cart);
  const [offsetActive, setOffsetActive] = useState(false);
  const { setOpenMobileMenu } = useContext(myContext);
  const productCategory = [
    "Ghế văn phòng",
    "Ghế gaming",
    "Ghế công thái học",
    "Bàn văn phòng",
    "Bàn Gaming",
    "Tủ văn phòng",
    "Sofa bàn trà",
    "Gear - phụ kiện",
  ];
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setOffsetActive(scrollPosition >= 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`h-[54px] border-y-[1px] flex items-center ${
        offsetActive || offsetActiveProduct
          ? "fixed top-0 shadow-md"
          : "-top-10"
      } hidden lg:flex w-full text-black bg-white transform duration-300 ease-linear z-20`}
    >
      <div className="w-full max-w-[1260px] mx-auto flex h-full justify-between items-center">
        {offsetActive ? (
          <Typography className="flex items-center text-[1.675rem] font-semibold text-black uppercase">
            NOITHAT
            <span className="px-2 py-1 mx-1 font-bold text-white rounded-md bg-primary">
              NVN
            </span>
            .COM
          </Typography>
        ) : (
          <p className="flex items-center h-full gap-2 px-3 text-sm font-semibold text-white uppercase bg-primary text-nowrap">
            <RiMenuLine size={24} />
            Danh mục sản phẩm
            <RiArrowDownSLine className="ml-6" size={23} />
          </p>
        )}

        <ul className="flex items-center px-5 space-x-10 text-sm font-medium">
          <li className="transform duration-500 ease-linear uppercase relative w-fit after:block after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/">Trang chủ</Link>
          </li>
          <Menu allowHover>
            <MenuHandler>
              <li className="transform duration-500 ease-linear uppercase relative w-fit after:block after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer">
                <Link to="/allproduct">Sản Phẩm</Link>
              </li>
            </MenuHandler>
            <MenuList className="p-0">
              <div className="p-4 bg-white rounded-md shadow-lg">
                <div className="grid grid-cols-3 gap-4 px-2 py-6 text-gray">
                  {productCategory.map((item, index) => (
                    <Typography
                      variant="small"
                      color="gray"
                      className="w-full h-full font-normal cursor-pointer hover:text-primary"
                    >
                      {item}
                    </Typography>
                  ))}
                </div>
              </div>
            </MenuList>
          </Menu>
          <li className="transform duration-500 ease-linear uppercase relative w-fit after:block after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/signup">Portfolio – Dự Án</Link>
          </li>
          <li className="transform duration-500 ease-linear uppercase relative w-fit after:block after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/">Flash Sales</Link>
            <p
              className={` ${
                offsetActive || offsetActiveProduct
                  ? "relative bottom-1 left-1"
                  : "absolute  left-1/2 -top-[20px]"
              }  inline-block text-white uppercase bg-[#D41212] text-[9px] px-1 font-semibold`}
            >
              Hot
            </p>
            <div
              class={` ${
                offsetActive || offsetActiveProduct
                  ? "hidden"
                  : "absolute right-7 top-0 w-0 h-0 border-t-[4px] border-r-[7px] border-t-[#D41212] border-r-transparent  "
              }  `}
            ></div>
          </li>
          <li className="transform duration-500 ease-linear uppercase relative w-fit after:block after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            <Link to="/">Giới thiệu</Link>
          </li>
        </ul>

        <div className="flex items-center gap-3 ml-10 text-black">
          {offsetActive ? (
            <>
              {" "}
              <RiUserLine size={23} />
              <Badge
                content={cartItems.length}
                className="bg-primary min-w-1 min-h-1"
              >
                <RiShoppingBagLine size={23} />
              </Badge>
              <p className="text-[0.9rem]">
                0 <span className="underline text-[0.7rem]">đ</span>
              </p>
            </>
          ) : (
            <RiMenuLine
              size={23}
              onClick={() => setOpenMobileMenu(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavItem;
