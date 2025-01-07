import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import {
  RiArrowDownSLine,
  RiMenuLine,
  RiShoppingBagLine,
} from "@remixicon/react";
import { useSelector } from "react-redux";
import { Badge, Typography } from "@material-tailwind/react";

const NavItem = ({ offsetActiveProduct }) => {
  const cartItems = useSelector((state) => state.cart);

  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [offsetActive, setOffsetActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition >= 350 ? setOffsetActive(true) : setOffsetActive(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`h-[54px] border-y-[1px] flex items-center  ${
        offsetActive || offsetActiveProduct
          ? "fixed top-0 shadow-md "
          : "-top-10"
      } flex w-full text-black  bg-white  transform duration-300 ease-linear z-20  `}
    >
      <div className="w-full max-w-[1260px] mx-auto flex h-full justify-between items-center">
        {offsetActive ? (
          <div className="flex flex-col">
            <Typography className="flex items-center text-[1.675rem] font-semibold text-black uppercase ">
              NOITHAT
              <span className="px-2 py-1 mr-1 font-bold text-white rounded-md bg-primary">
                NVN
              </span>
              .COM
            </Typography>
          </div>
        ) : (
          <p className="flex items-center h-full gap-2 px-3 text-sm font-semibold text-white uppercase bg-primary text-nowrap ">
            <RiMenuLine size={23} />
            Danh mục sản phẩm
            <RiArrowDownSLine className="ml-6" size={23} />
          </p>
        )}

        <ul
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex items-center px-5 space-x-10 text-sm font-medium outline-4 "
        >
          <li
            onClick={() => setActive(0)}
            className="transform duration-500 ease-linear uppercase relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-nowrap"
          >
            <Link to="/">Trang chủ</Link>
          </li>
          <li
            onClick={() => setActive(1)}
            className="transform duration-500 ease-linear uppercase relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-nowrap"
          >
            <Link to="/allproduct">Sản Phẩm</Link>
          </li>
          <li
            onClick={() => setActive(2)}
            className="transform duration-500 ease-linear uppercase relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-nowrap"
          >
            <Link to="/signup">Portfolio – Dự Án</Link>
          </li>
          <li
            onClick={() => setActive(3)}
            className="transform duration-500 ease-linear uppercase relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-nowrap"
          >
            <Link to="/">Flash Sales</Link>
            <div class=" absolute right-7 top-0 w-0 h-0 border-t-[4px] border-r-[7px] border-t-[#D41212] border-r-transparent   "></div>
            <p className="absolute left-1/2 -top-[20px] inline-block text-white uppercase bg-[#D41212] text-[9px] px-1 font-semibold">
              Hot
            </p>
          </li>
          <li
            onClick={() => setActive(4)}
            className="transform duration-500 ease-linear uppercase relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-nowrap"
          >
            <Link to="/">Giới thiệu</Link>
          </li>
        </ul>
        <div
          className={`${
            offsetActive || offsetActiveProduct ? " " : "opacity-0"
          } flex items-center gap-3 text-white ml-10`}
        >
          <Badge
            content={cartItems.length}
            className="bg-primary min-w-1 min-h-1 "
          >
            <RiShoppingBagLine size={23} />
          </Badge>
          <p className="text-[0.9rem]">
            0{" "}
            <span className="underline text-[0.7rem] relative bottom-[2px] ">
              đ
            </span>
          </p>
        </div>
        <RiMenuLine size={23} />
      </div>
    </div>
  );
};

export default NavItem;
