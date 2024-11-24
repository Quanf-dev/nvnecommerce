import React from "react";
import HeadCategory from "../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";

const DeskGamingProduct = () => {
  const seoDeskGaming = [
    "Bàn gaming giá rẻ",
    "Bàn gaming có ngăn kéo",
    "Bàn gaming chân sắt ",
    "Bàn chơi game",
  ];
  return (
    <div className="mt-16">
      <HeadCategory text="BÀN GAMING" />
      <ListSeoProduct list={seoDeskGaming} />
      <div className="grid grid-cols-5 gap-5 mt-4">
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

export default DeskGamingProduct;
