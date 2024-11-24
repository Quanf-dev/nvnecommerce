import React from "react";
import ProductCard from "../productCard/ProductCard";
import mblike from "../../assets/logo/mblike.png"

const BestSellingProducts = () => {
  return (
    <div className="w-full px-4 py-4 bg-textBackground-light relative">
       <h2 className="w-full text-[1.3rem] font-medium  text-textbgcolor-dark border-b-2 border-primary pb-2">
       SẢN PHẨM BÁN CHẠY
     </h2>
     <img src={mblike} alt="GIá cực ưu đãi" className="absolute z-10 -right-[5px] -top-[6px]" />
      <div className="flex flex-wrap gap-6 mt-7"> <ProductCard/> <ProductCard/><ProductCard/><ProductCard/><ProductCard/></div>
    </div>
  );
};

export default BestSellingProducts;
