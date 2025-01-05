import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router";
import LayoutProduct from "../../layout/LayoutProduct";
import Loader from "../../components/loader/Loader";
import myContext from "../../context/myContext";
import ProductCard from "../../components/productCard/ProductCard";
import { convertToSlugHelper } from "../../utils/convertToSlugHelper";
import useCart from "../../hooks/useCart";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const { getAllProduct, loading } = useContext(myContext);
  const navigate = useNavigate();
  const filterProduct = getAllProduct.filter((obj) =>
    convertToSlugHelper(obj.product_category?.toLowerCase()).includes(
      categoryname.toLowerCase()
    )
  );
  const { cartItems, addCart, deleteCart } = useCart();
  return (
    <LayoutProduct>
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="grid grid-cols-4 gap-10">
              {filterProduct.length > 0 ? (
                filterProduct.map((item, index) => (
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
                ))
              ) : (
                <div className="col-span-4 text-center">
                  <h1 className="text-xl text-black">Hết hàng</h1>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </LayoutProduct>
  );
};

export default CategoryPage;
