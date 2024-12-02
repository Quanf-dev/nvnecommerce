import React from "react";
import HeadCategory from "./../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";

const SwiveChair = () => {
  const seoKneeling = [
    "Ghế xoay cao cấp",
    "Ghế xoay lưng tựa",
    "Ghế xoay giá rẻ",
    "Ghế xoay có đệm",
  ];
  return (
    <div className="mt-24">
      <HeadCategory text="Ghế Xoay" />
      <ListSeoProduct list={seoKneeling} />
      <div className="grid gap-5 md:grid-cols-4 xl:grid-cols-5 mt-7">
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
        <ProductCard className="border-[1px] border-gray-400" />
      </div>
    </div>
  );
};

export default SwiveChair;
