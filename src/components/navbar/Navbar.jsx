import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { Badge } from "@material-tailwind/react";
import {
  RiNotification4Line,
  RiNotificationLine,
  RiPhoneLine,
  RiShoppingBagLine,
  RiShoppingBasketFill,
  RiUserLine,
} from "@remixicon/react";
import { useEffect, useState } from "react";

import { Typography } from "@material-tailwind/react";
import logo from "@assets/logo/logoFurniture.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  // navList Data
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [offsetActive, setOffsetActive] = useState(false);

  const navData = [
    { text: "Trang chủ", url: "/" },
    { text: "Bàn", url: "/allproduct" },
    { text: "Bàn order", url: "/signup" },
    { text: "Ghế", url: "/" },
    { text: "Combo Bàn ghế", url: "/" },
    { text: "Decor phòng", url: "/" },
    { text: "Gear - phụ kiện", url: "/" },
  ];

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition >= 350 ? setOffsetActive(true) : setOffsetActive(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="flex flex-col items-center w-full ">
      {/* main  */}
      <div className="flex items-center justify-around w-screen max-w-[1440px] gap-5 py-3">
        {/* left  */}
        <div className="flex items-center h-32 py-3 w-[460px] lg:py-0 gap-3">
          <Link to={"/"}>
            <img src={logo} className="bg-cover w-36 " />
          </Link>
          <div className="flex flex-col">
            <Typography
              variant="h4"
              className="flex flex-col items-center uppercase text-primary"
            >
              NHAN Furniture
            </Typography>
            <p className="text-[1rem] text-[#a98435] text-center">
              Chuyên cung cấp sỉ lẻ bàn ghế văn phòng{" "}
            </p>
          </div>
        </div>
        <div className="w-[350px]">
          {/* Search Bar  */}
          <SearchBar />
        </div>
        {/* right   */}
        <div className="flex gap-7">
          <div className="flex items-center justify-center gap-4 ">
            <div className="flex">
              <RiUserLine size={23} />
              <p className="text-gray-800">Đăng nhập</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                content={cartItems.length}
                className="bg-primary min-w-1 min-h-1 "
              >
                <RiShoppingBagLine size={23} />
              </Badge>
              <p className="text-[0.9rem]">
                0{" "}
                <span className="underline text-[0.7rem] relative bottom-[2px]">
                  đ
                </span>
              </p>
            </div>
          </div>
          <div className="relative flex items-center h-10 border-l-2 border-solid top-[6px]  ">
            {" "}
            <Badge content={1} className="bg-red-600 min-w-1 min-h-1">
              <RiNotification4Line size={21} className="ml-6" />
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <RiPhoneLine
              size={40}
              className="relative text-green-300 bottom-1"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Hotline</p>
              <p className="text-[#1e73be] font-bold cursor-pointer text-[1.15rem] hover:text-black">
                036 428 9846
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* item Navbar  */}
      <div
        className={`bg-gradient-to-b from-[#ce8c24] to-[#f39c12] ${
          offsetActive ? "fixed top-0 " : "-top-10"
        } flex justify-center  w-full bg-primary  transform duration-300 ease-linear z-20  `}
      >
        <ul
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex space-x-5 font-semibold text-white  text-balance outline-4 w-[960px]  py-2 px-5 "
        >
          {" "}
          {navData.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`flex transform duration-500 ease-linear uppercase  ${
                hover === true ? "no-underline" : ""
              } ${
                active === index
                  ? "underline underline-offset-4 decoration-[3px] text-custom-dark-gray"
                  : "hover:text-custom-dark-gray hover:underline hover:underline-offset-4 decoration-[3px]    "
              }`}
            >
              {" "}
              <Link to={item.url}>{item.text}</Link>{" "}
            </li>
          ))}{" "}
          {/* right   */}
        </ul>
        <div
          className={`${
            offsetActive ? " " : "opacity-0"
          } w-[250px] h-5 relative top-[2px]  `}
        >
          {/* Search Bar  */}
          <SearchBar offsetActive={true} />
        </div>
        <div
          className={`${
            offsetActive ? " " : "opacity-0"
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
      </div>
    </nav>
  );
};

export default Navbar;
