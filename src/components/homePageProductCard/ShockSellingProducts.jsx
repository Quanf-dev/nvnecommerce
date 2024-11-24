import title from "../../assets/logo/title.png";
import ProductCard from "../productCard/ProductCard";

const ShockSellingProducts = () => {
  return (
    <div className="mt-16 ">
      <img
        src={title}
        alt="Khuyến mãi sốc"
        className="relative -translate-x-1/2 left-1/2"
      />
      <div className="grid grid-cols-5 mt-7">
        {" "}
        <ProductCard className="border-primary border-[1px] border-r-0 " />
        <ProductCard className="border-primary border-[1px] border-r-0 " />
        <ProductCard className="border-primary border-[1px] border-r-0 " />
        <ProductCard className="border-primary border-[1px] border-r-0 " />
        <ProductCard className="border-primary border-[1px] " />
      </div>
    </div>
  );
};

export default ShockSellingProducts;
