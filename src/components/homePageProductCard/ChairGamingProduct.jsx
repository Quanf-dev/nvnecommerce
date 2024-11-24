import React from "react";
import HeadCategory from "../headCategory/HeadCategory";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import ProductCard from "../productCard/ProductCard";

const ChairGamingProduct = () => {
  const seoChairGaming = [
    "Ghế gaming giá rẻ",
    "Ghế gaming cao cấp",
    "Ghế chơi game ",
    "Ghế gaming tốt nhất",
  ];
  return (
    <div className="mt-6">
      <HeadCategory text="GHẾ GAMING" />
      <ListSeoProduct list={seoChairGaming} />
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

export default ChairGamingProduct;
