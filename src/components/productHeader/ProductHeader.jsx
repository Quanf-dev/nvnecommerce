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
    <div className="h-[100px] lg:h-[320px] w-full relative  ">
      <img
        src={banner}
        alt=""
        className="object-cover w-full h-full brightness-75"
      />
      <h2 className="absolute flex items-center gap-1 text-2xl font-bold text-white uppercase -translate-x-1/2 -translate-y-1/2 text-nowrap w-fit md:text-4xl top-1/2 left-1/2">
        <span>
          <RiArrowLeftLine
            onClick={() => navigate("/")}
            className="w-5 h-5 cursor-pointer md:w-10 md:h-10 hover:text-gray-200"
          />
        </span>
        {nameCategory ? nameCategory : "Sản phẩm"}
      </h2>
    </div>
  );
};

export default ProductHeader;
