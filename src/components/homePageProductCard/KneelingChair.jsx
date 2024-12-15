import React, { useContext, useEffect } from "react";
import HeadCategory from "./../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "./../listSeoProduct/ListSeoProduct";
import myContext from "../../context/myContext";
import filterProduct from "../../utils/filterProduct";

const KneelingChair = () => {
  const seoKneeling = [
    "Ghế chân quỳ cao cấp",
    "Mua ghế chân quỳ",
    "Ghế chân quỳ giá rẻ",
    "Ghế chân quỳ chất lượng",
  ];

  const filterKneelingChair = filterProduct({ category: "ghế chân quỳ" });
  return (
    <div className="mt-24">
      <HeadCategory text="Ghế chân quỳ " />
      <ListSeoProduct list={seoKneeling} />
      <div className="grid gap-5 mt-4 md:grid-cols-4 xl:grid-cols-5">
        {filterKneelingChair.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            item={item}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            rating={item.rating}
            image_id={item.images.images_desc[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default KneelingChair;
