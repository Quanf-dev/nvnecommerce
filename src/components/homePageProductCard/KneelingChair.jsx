import React from "react";
import HeadCategory from "./../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "./../listSeoProduct/ListSeoProduct";

const KneelingChair = () => {
  const seoKneeling = [
    "Ghế chân quỳ cao cấp",
    "Mua ghế chân quỳ",
    "Ghế chân quỳ giá rẻ",
    "Ghế chân quỳ chất lượng",
  ];
  return (
    <div className="mt-24">
      <HeadCategory text="Ghế chân quỳ " />
      <ListSeoProduct list={seoKneeling} />
      <div className="grid gap-5 mt-4 md:grid-cols-4 xl:grid-cols-5">
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

export default KneelingChair;
