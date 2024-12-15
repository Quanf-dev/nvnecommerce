import React from "react";
import HeadCategory from "./../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import filterProduct from "../../utils/filterProduct";

const SwiveChair = () => {
  const seoKneeling = [
    "Ghế xoay cao cấp",
    "Ghế xoay lưng tựa",
    "Ghế xoay giá rẻ",
    "Ghế xoay có đệm",
  ];
  const filterSwiveChair = filterProduct({ category: "ghế xoay" });

  return (
    <div className="mt-24">
      <HeadCategory text="Ghế Xoay" />
      <ListSeoProduct list={seoKneeling} />
      <div className="grid gap-5 md:grid-cols-4 xl:grid-cols-5 mt-7">
        {filterSwiveChair.map((item, index) => (
          <ProductCard
            key={index}
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

export default SwiveChair;
