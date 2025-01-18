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

  const filterSwiveChair = filterProduct({
    category: ["ghế xoay", "ghế công thái học"],
  });

  return (
    <div className="mt-16 ">
      <HeadCategory text="BÀN GAMING" />
      <ListSeoProduct list={seoDeskGaming} />
      <div className="grid grid-cols-2 gap-5 mt-4 md:gap-5 md:grid-cols-4 xl:grid-cols-5 ">
        {/* {filterDeskGaming.map((item, index) => (
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
        ))} */}
        {filterSwiveChair.map((item, index) => (
          <>
            <ProductCard
              key={index}
              id={item.id}
              item={item}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.color_black[0]}
              className="border-gray-500 border-[1px]  "
            />
            <ProductCard
              key={index}
              id={item.id}
              item={item}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.color_black[0]}
              className="border-gray-500 border-[1px] "
            />
            <ProductCard
              key={index}
              id={item.id}
              item={item}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.color_black[0]}
              className="border-gray-500 border-[1px] "
            />
            <ProductCard
              key={index}
              id={item.id}
              item={item}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.color_black[0]}
              className="border-gray-500 border-[1px]  "
            />
            <ProductCard
              key={index}
              id={item.id}
              item={item}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              rating={item.rating}
              image_id={item.images.color_black[0]}
              className="border-gray-500 border-[1px]  "
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default DeskGamingProduct;
