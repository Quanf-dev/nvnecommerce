import { Link } from "react-router-dom";
import LayoutHome from "./../../layout/LayoutHome";
import logo from "@assets/logo/logoFurniture.png";
import { Typography } from "@material-tailwind/react";
import { getCloudinaryImage } from "./../../utils/cloudinaryHelper";
import {
  RiFacebookBoxFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiRoadMapLine,
  RiSmartphoneLine,
} from "@remixicon/react";
import { AdvancedImage } from "@cloudinary/react";

const imageBanking = getCloudinaryImage("banking-768x393_if51cw", 275);

const Footer = () => {
  return (
    <>
      <LayoutHome>
        <footer className="flex py-12 bg-white">
          <div className="w-3/7">
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
              </div>
            </div>
            <div className="text-primary ">
              <div className="flex gap-2">
                <RiMapPinLine size={20} />
                <p className="text-black">
                  CS1:{" "}
                  <span className="font-bold">
                    Số 41 Gò Dư, Liên Chiểu, Đà Nẵng
                  </span>
                </p>
              </div>
              <div className="flex gap-2 mt-5">
                <RiMapPinLine size={20} />
                <p className="text-black">
                  CS1:{" "}
                  <span className="font-bold">
                    Số 194 Lý Nhân Tông, Hương Xuân, Huế
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-2/7">
            <Typography variant="h6">HỖ TRỢ KHÁCH HÀNG</Typography>
            <div className="flex gap-1 text-primary ">
              <RiSmartphoneLine size={22} />
              <p className="text-black">
                Hotline: <span className="font-bold">036 428 9846</span>
              </p>
            </div>
            <div className="flex gap-1 cursor-pointer text-primary ">
              <RiMailLine size={22} />
              <p className="text-black">
                Email:{" "}
                <span className="font-bold">nhannguyen2211ht@gmail.com</span>
              </p>
            </div>
            <div className="flex gap-1 cursor-pointer text-primary ">
              <RiRoadMapLine size={22} />
              <p className="font-bold text-black">Xem Bản đồ Cơ Sở Huế</p>
            </div>
            <div className="flex gap-1 cursor-pointer text-primary">
              <RiRoadMapLine size={22} />
              <p className="font-bold text-black ">Xem Bản đồ Cơ Sở Đà Nẵng</p>
            </div>
            <div className="flex gap-1 cursor-pointer text-primary ">
              <RiFacebookBoxFill size={22} />
              <p className="font-bold text-black">Facebook</p>
            </div>
          </div>
          <div className="ml-10 w-2/7">
            {" "}
            <Typography variant="h6" className="mb-4">
              PHƯƠNG THỨC THANH TOÁN
            </Typography>
            <AdvancedImage cldImg={imageBanking} />
          </div>
        </footer>
      </LayoutHome>
      <div className="bg-[#1f1f1f] text-[#FFFFFF80] py-[7.5px] text-[0.7em] ">
        <div className="max-w-[1260px] mx-auto ">
          © Copyright 2018 - Nội Thất NVN Huế - Đà Nẵng
        </div>
      </div>
    </>
  );
};

export default Footer;
