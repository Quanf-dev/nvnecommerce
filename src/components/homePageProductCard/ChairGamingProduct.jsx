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
  // const filterChairGaming = filterProduct({ category: "ghế gaming" });
  const filterSwiveChair = filterProduct({
    category: ["ghế xoay", "ghế công thái học"],
  });
  return (
    <div className="mt-6">
      <HeadCategory text="GHẾ GAMING" />
      <ListSeoProduct list={seoChairGaming} />
      <div className="grid gap-5 mt-4 md:grid-cols-4 xl:grid-cols-5">
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
              className="border-primary border-[1px] border-r-0  "
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
              className="border-primary border-[1px] border-r-0 "
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
              className="border-primary border-[1px] border-r-0 "
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
              className="border-primary border-[1px] border-r-0  "
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
              className="border-primary border-[1px]  "
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ChairGamingProduct;
