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

const imageBanking = getCloudinaryImage("bannerthanhtoan_crmyll", 275);

const Footer = () => {
  return (
    <>
      <LayoutHome>
        <footer className="flex flex-col py-5 overflow-hidden bg-white gap-36 lg:flex-row">
          <div className="flex flex-col gap-5 w-4/7">
            <Typography variant="h6" className="uppercase">
              Trụ sở noithatnvn.com
            </Typography>
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
          <div className=" w-2/7">
            {" "}
            <Typography variant="h6" className="mb-4">
              PHƯƠNG THỨC THANH TOÁN
            </Typography>
            <AdvancedImage cldImg={imageBanking} />
          </div>
        </footer>
      </LayoutHome>
      <div className=" text-center  text-black py-5 text-[0.7em] border-t-2">
        <div className="max-w-[1260px] mx-auto ">
          <span className="font-bold uppercase">Nội Thất NVN Huế-Đà Nẵng </span>{" "}
          THƯƠNG HIỆU NỘI THẤT VĂN PHÒNG CAO CẤP HÀNG ĐẦU MIỀN TRUNG
        </div>
      </div>
    </>
  );
};

export default Footer;
