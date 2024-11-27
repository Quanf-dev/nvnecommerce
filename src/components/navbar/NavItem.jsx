import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { RiShoppingBagLine } from "@remixicon/react";
import { useSelector } from "react-redux";
import { Badge } from "@material-tailwind/react";
import logo from "@assets/logo/logoFurniture.png";

const NavItem = ({ offsetActiveProduct }) => {
  const cartItems = useSelector((state) => state.cart);

  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [offsetActive, setOffsetActive] = useState(false);

  const navData = [
    { text: "Trang chủ", url: "/" },
    { text: "Sản Phẩm", url: "/allproduct" },
    { text: "Bàn văn phòng", url: "/signup" },
    { text: "Ghế văn phòng", url: "/" },
    { text: "Bàn ghế Gaming", url: "/" },
    { text: "Bàn ghế khác", url: "/" },
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
    <div
      className={`bg-gradient-to-b from-[#ce8c24] to-[#f39c12] ${
        offsetActive || offsetActiveProduct ? "fixed top-0 " : "-top-10"
      } flex justify-center  w-full bg-primary  transform duration-300 ease-linear z-20  `}
    >
      <ul
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex space-x-5 font-semibold text-white  text-balance outline-4 w-[1060px]  py-2 px-5 "
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
          offsetActive || offsetActiveProduct ? " " : "opacity-0"
        } w-[250px] h-5 relative top-[2px]  `}
      >
        {/* Search Bar  */}
        <SearchBar offsetActive={true} />
      </div>
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
    </div>
  );
};

export default NavItem;
