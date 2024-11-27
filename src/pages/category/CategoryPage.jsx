import { useNavigate, useParams } from "react-router";
import Layout from "../../layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";
import LayoutProduct from "../../layout/LayoutProduct";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const { getAllProduct, loading } = useContext(myContext);
  const navigate = useNavigate();
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.toLowerCase().includes(categoryname.toLowerCase())
  );
  const { cartItems, addCart, deleteCart } = useCart();
  return (
    <LayoutProduct>
      {loading ? (
        <>
          <div className="flex justify-center">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto ">
              <div className="flex flex-wrap justify-center -m-4">
                {filterProduct.length > 0 ? (
                  <>
                    {filterProduct.map((item, index) => {
                      const { id, title, price, productImageUrl } = item;
                      return (
                        <div key={index} className="w-full p-4 md:w-1/4">
                          <div className="h-full overflow-hidden border border-gray-300 shadow-md cursor-pointer rounded-xl">
                            <img
                              onClick={() => navigate(`/productinfo/${id}`)}
                              className="w-full lg:h-80 h-96"
                              src={productImageUrl}
                              alt="blog"
                            />
                            <div className="p-6">
                              <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                                E-bharat
                              </h2>
                              <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                {title.substring(0, 25)}
                              </h1>
                              <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                ₹{price}
                              </h1>

                              <div className="flex justify-center ">
                                {cartItems.some((p) => p.id === item.id) ? (
                                  <button
                                    onClick={() => deleteCart(item)}
                                    className=" bg-red-700 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                  >
                                    Delete From Cart
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => addCart(item)}
                                    className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                                  >
                                    Add To Cart
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <div className="flex justify-center">
                      <img
                        className="mb-2 "
                        src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-xl text-black ">
                      No {categoryname} product found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </LayoutProduct>
  );
};

export default CategoryPage;
