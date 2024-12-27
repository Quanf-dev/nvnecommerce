import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { Badge } from "@material-tailwind/react";
import {
  RiNotification4Line,
  RiPhoneLine,
  RiShoppingBagLine,
  RiUserLine,
} from "@remixicon/react";

import { Typography } from "@material-tailwind/react";
import logo from "@assets/logo/logoFurniture.png";
import { useSelector } from "react-redux";
import NavItem from "./NavItem";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  // navList Data

  const CollapseDesk = {
    ban: [
      "Bàn giám đốc",
      "Bàn nhân viên",
      "Bàn chân sắt",
      "Bàn máy tính",
      "Bàn họp",
    ],
  };
  const dataChair = {
    theoChucVu: ["Ghế Giám Đốc", "Ghế Trưởng Phòng", "Ghế Nhân Viên"],
    theoPhanLoai: [
      "Ghế Công Thái Học",
      "Ghế Phòng Họp",
      "Ghế Ngồi Máy Tính",
      "Ghế Băng Chờ",
    ],
    theoTinhNang: ["Ghế Chân Quỳ", "Ghế Xoay", "Ghế Lưới", "Ghế Da Văn Phòng"],
  };
  const dataGaming = {
    gheGaming: [
      "Ghế Gaming Extreme Zero",
      "Ghế Gaming Lamborghini",
      "Ghế Gaming Thể Thao",
      "Ghế Gaming F1 Racing",
      "Ghế Gaming Sport Virens",
      "Ghế Gaming E-Sport",
    ],
    banGaming: ["Bàn Gaming Z-Desk"],
  };
  const dataOtherFurniture = {
    banGheKhac: [
      "Bàn Học Sinh",
      "Ghế Học Sinh",
      "Bàn Ghế Bar – Cafe",
      "Kệ Tivi",
      "Tủ Hộc",
    ],
  };

  return (
    <nav className="flex flex-col items-center w-full ">
      {/* main  */}
      <div className="flex items-center justify-around w-screen max-w-[1260px] gap-5 py-3">
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
              NVN Furniture
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
                className="bg-primary min-w-3 min-h-3 "
              >
                <RiShoppingBagLine size={23} />
              </Badge>
              <p className="text-[0.9rem] relative  ">
                0{" "}
                <span className="underline text-[0.7rem] relative bottom-[3px] right-[1px]">
                  đ
                </span>
              </p>
            </div>
          </div>
          <div className="relative flex items-center h-10 border-l-2 border-solid top-[6px]  ">
            {" "}
            <Badge content={1} className="bg-red-600 min-w-3 min-h-3">
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
      <NavItem />{" "}
    </nav>
  );
};

export default Navbar;
