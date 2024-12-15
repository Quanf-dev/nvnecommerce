import React from "react";
import HeadCategory from "../headCategory/HeadCategory";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import ProductCard from "../productCard/ProductCard";
import filterProduct from "../../utils/filterProduct";

const ChairGamingProduct = () => {
  const seoChairGaming = [
    "Ghế gaming giá rẻ",
    "Ghế gaming cao cấp",
    "Ghế chơi game ",
    "Ghế gaming tốt nhất",
  ];
  const filterChairGaming = filterProduct({ category: "ghế gaming" });

  return (
    <div className="mt-6">
      <HeadCategory text="GHẾ GAMING" />
      <ListSeoProduct list={seoChairGaming} />
      <div className="grid gap-5 mt-4 md:grid-cols-4 xl:grid-cols-5">
        {filterChairGaming.map((item, index) => (
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

export default ChairGamingProduct;
