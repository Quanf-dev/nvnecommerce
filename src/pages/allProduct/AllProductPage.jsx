import LayoutProduct from "../../layout/LayoutProduct";
import ProductCard from "./../../components/productCard/ProductCard";

const AllProductPage = () => {
  return (
    <LayoutProduct>
      <div className="grid grid-cols-4 gap-5">
        {" "}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </LayoutProduct>
  );
};

export default AllProductPage;
