import React from "react";
import ZaloIcon from "../../assets/icons/ZaloIcon";
import { RiFacebookFill, RiMapPin2Fill, RiPhoneFill } from "@remixicon/react";

const Announcement = () => {
  const infoData = [
    {
      text: "036 428 9846",
      icon: RiPhoneFill,
    },
    {
      text: "fb.com/noithatnvn",
      icon: RiFacebookFill,
    },
    {
      text: "41 Gò Dư, Liên Chiểu, Đà Nẵng",
      icon: RiMapPin2Fill,
    },
  ];
  return (
    <div className="flex justify-center py-2 text-white bg-[#BC943C]">
      <div className="max-w-[1400px] flex ">
        <p className="flex-shrink-0 text-sm font-bold text-center uppercase ">
          nvn furniture - THƯƠNG HIỆU NỘI THẤT VĂN PHÒNG CAO CẤP HÀNG ĐẦU MIỀN
          TRUNG
        </p>
        <div className="w-40 flex-shrink-1"></div>
        <div className="flex flex-shrink-0 text-xl list-none ">
          {infoData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex gap-2 ml-6">
                <IconComponent size={20} />
                <p className="text-sm text-[#d3d3d3] font-bold">{item.text}</p>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
