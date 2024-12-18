import React, { useContext, useEffect, useState } from "react";
import banner from "@assets/banner_Product.jpg";
import { Typography } from "@material-tailwind/react";
import { RiArrowLeftLine } from "@remixicon/react";
import myContext from "./../../context/myContext";

const ProductHeader = () => {
  const { nameCategory } = useContext(myContext);

  return (
    <div className="h-[320px] w-full -py-6 relative">
      <img
        src={banner}
        alt=""
        className="object-cover w-full h-full brightness-75"
      />
      <Typography
        variant="h1"
        className="absolute flex items-center gap-1 text-white uppercase -translate-x-1/2 cursor-pointer top-1/2 left-1/2"
      >
        <span>
          <RiArrowLeftLine size={35} />
        </span>
        {nameCategory}
      </Typography>
    </div>
  );
};

export default ProductHeader;
