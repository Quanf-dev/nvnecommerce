import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMapPin2Fill,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";

const Announcement = () => {
  const iconSocial = [
    {
      icon: RiFacebookFill,
    },
    {
      icon: RiMapPin2Fill,
    },
    {
      icon: RiInstagramFill,
    },
    {
      icon: RiTwitterFill,
    },
    {
      icon: RiYoutubeFill,
    },
    {
      icon: RiLinkedinBoxFill,
    },
  ];
  return (
    <div className="h-8  text-white bg-[#092143] text-xs font-semibold ">
      <div className="max-w-[1260px] flex w-full mx-auto justify-center lg:justify-between  h-full items-center  ">
        <p className="hidden text-center uppercase lg:block ">
          NOITHATNVN - THƯƠNG HIỆU NỘI THẤT VĂN PHÒNG CAO CẤP HÀNG ĐẦU MIỀN
          TRUNG
        </p>
        <div className="flex items-center flex-shrink-0 h-full gap-2 list-none ">
          <p className="hidden lg:block ">HOTLINE: 036 428 9846</p>
          <p className="hidden lg:flex border-gray-300 h-full border-x-[1px] cursor-pointer  items-center">
            <span className="mx-2">Zalo</span>
          </p>
          {iconSocial.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li
                key={index}
                className="duration-300 transform cursor-pointer hover:text-gray-500"
              >
                <IconComponent size={20} />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
