import React from "react";
import HeadCategory from "../headCategory/HeadCategory";
import ProductCard from "../productCard/ProductCard";
import ListSeoProduct from "../listSeoProduct/ListSeoProduct";
import filterProduct from "../../utils/filterProduct";

const DeskGamingProduct = () => {
  const seoDeskGaming = [
    "Bàn gaming giá rẻ",
    "Bàn gaming có ngăn kéo",
    "Bàn gaming chân sắt ",
    "Bàn chơi game",
  ];
  const filterDeskGaming = filterProduct({ category: "bàn gaming" });

  return (
    <div className="mt-16">
      <HeadCategory text="BÀN GAMING" />
      <ListSeoProduct list={seoDeskGaming} />
      <div className="grid grid-cols-5 gap-5 mt-4">
        {filterDeskGaming.map((item, index) => (
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

export default DeskGamingProduct;
