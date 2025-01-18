import title from "../../assets/logo/title.png";
import filterProduct from "../../utils/filterProduct";
import ProductCard from "../productCard/ProductCard";

const ShockSellingProducts = () => {
  const filterSwiveChair = filterProduct({
    category: ["ghế xoay", "ghế công thái học"],
  });

  return (
    <div className="mt-16 overflow-hidden ">
      <img
        src={title}
        alt="Khuyến mãi sốc"
        className="relative -translate-x-1/2 left-1/2"
      />
      <div className="grid grid-cols-5 mt-7">
        {" "}
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

export default ShockSellingProducts;
