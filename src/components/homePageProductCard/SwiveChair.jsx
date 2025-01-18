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
  const filterSwiveChair = filterProduct({
    category: ["ghế xoay", "ghế công thái học"],
  });

  return (
    <div className="mt-4 md:mt-8 lg:mt-16 ">
      <HeadCategory text="Ghế Xoay" />
      <ListSeoProduct list={seoKneeling} />
      <div className="grid gap-5 md:grid-cols-4 xl:grid-cols-5 mt-7">
        {filterSwiveChair.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            item={item}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
            rating={item.rating}
            image_id={item.images.color_black[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default SwiveChair;
