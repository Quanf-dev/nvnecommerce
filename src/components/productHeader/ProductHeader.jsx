import React, { useContext, useEffect, useState } from "react";
import banner from "@assets/banner_Product.jpg";
import { Typography } from "@material-tailwind/react";
import { RiArrowLeftLine } from "@remixicon/react";
import myContext from "./../../context/myContext";
import { useNavigate } from "react-router-dom";

const ProductHeader = () => {
  const navigate = useNavigate();
  const { nameCategory } = useContext(myContext);

  return (
    <div className="h-[320px] w-full relative  ">
      <img
        src={banner}
        alt=""
        className="object-cover w-full h-full brightness-75"
      />
      <Typography
        variant="h1"
        className="absolute flex items-center gap-1 text-white uppercase -translate-x-1/2 top-1/2 left-1/2"
      >
        <span>
          <RiArrowLeftLine
            size={35}
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-gray-200"
          />
        </span>
        {nameCategory}
      </Typography>
    </div>
  );
};

export default ProductHeader;
