import { useContext } from "react";
import LayoutProduct from "../../layout/LayoutProduct";
import ProductCard from "./../../components/productCard/ProductCard";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const AllProductPage = () => {
  const { getAllProduct, loading } = useContext(myContext);
  return (
    <LayoutProduct>
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container mx-auto lg:px-5 lg:py-5">
            <div className="grid grid-cols-4 gap-10">
              {getAllProduct.map((item, index) => (
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
        </section>
      )}
    </LayoutProduct>
  );
};

export default AllProductPage;
