import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { Badge } from "@material-tailwind/react";
import { RiShoppingBasketFill } from "@remixicon/react";
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
      <div className="flex items-center justify-between w-screen max-w-[1260px]  py-3 px-6">
        {/* left  */}
        <div className="flex items-center h-32 py-3 w-[440px] lg:py-0">
          <Link to={"/"}>
            <img src={logo} className="bg-cover w-36  " />
          </Link>
          <div className="flex flex-col">
          <Typography
            variant="h4"
            className=" text-primary uppercase flex flex-col items-center leading-10 "
          >
            NHAN Furniture 
          </Typography>
          <p className="text-[1rem] text-[#a98435] ">Chuyên cung cấp sỉ lẻ bàn ghế văn phòng </p>
          <p className="text-[0.9rem] text-[#a98435] text-center ">hotline: 0364289846</p>
          </div>
        </div>
        <div className="w-[350px]">
          {/* Search Bar  */}
          <SearchBar />
        </div>
        {/* right   */}
        <div className="flex items-center justify-center flex-shrink-0 gap-6 ">
          <div className="flex items-center justify-center gap-3 text-white uppercase rounded-lg bg-primary min-h-10 min-w-36">
            <p className="text-[0.9rem] font-medium ">Giỏ hàng</p>
            <Badge
              content={cartItems.length}
              className="bg-[#f5ca70] min-w-1 min-h-1 "
            >
              <RiShoppingBasketFill size={23} />
            </Badge>
          </div>
          <div className="h-10 border-l-2 border-solid "></div>
          <div class="flex min-w-40  flex-wrap items-center justify-center gap-4 bg-white py-8 shadow-gray-200 transition-all duration-300 "></div>
        </div>
      </div>
      {/* item Navbar  */}
      <div
        className={`bg-gradient-to-b from-[#ce8c24] to-[#f39c12] ${
          offsetActive ? "fixed top-0 " : "-top-10"
        } flex justify-center w-full bg-primary  transform duration-300 ease-linear z-10  `}
      >
        <ul
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex space-x-5 font-semibold text-white  uppercase text-balance outline-4 w-[1260px]  py-2 px-5 "
        >
          {" "}
          {navData.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`flex transform duration-150 ease-linear ${
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
