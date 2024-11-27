import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import useCart from "../hooks/useCart";
import {
  Breadcrumbs,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import ProductHeader from "../components/productHeader/ProductHeader";
import NavItem from "../components/navbar/NavItem";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import LayoutHome from "./LayoutHome";
import { Link } from "react-router-dom";

const LayoutProduct = ({ children }) => {
  const navigate = useNavigate();
  const { nameCategory } = useContext(myContext);

  const { cartItems, deleteCart, addCart } = useCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <NavItem offsetActiveProduct={true} />
      {/* Heading  */}
      <ProductHeader />

      {/* main  */}
      <LayoutHome>
        <section className="flex text-gray-600 body-font ">
          {/* left */}
          <div>
            <CategoryFilter />
          </div>
          {/* Right */}
          <div className="flex-1 ml-10">
            <div className="flex items-center justify-between">
              <div>
                <Breadcrumbs className="p-0 bg-white customBreadcrumbs">
                  <Link to={"/"} className="opacity-60">
                    Trang chủ
                  </Link>
                  <p>{nameCategory}</p>
                </Breadcrumbs>
              </div>
              <div className="w-56 customSelect ">
                <Select
                  label="Sắp xếp theo"
                  className="text-black border-t-0 rounded-none border-primary border-x-0"
                >
                  <Option value="sortedByPopular">
                    Thứ tự theo mức độ phổ biến
                  </Option>
                  <Option value="sortedByRating">
                    Thứ tự theo điểm đánh giá
                  </Option>
                  <Option value="sortedByNew">Mới nhất</Option>
                  <Option value="sortedIncrement">
                    Thứ tự theo giá: thấp đến cao
                  </Option>
                  <Option value="sortedDecrement">
                    Thứ tự theo giá: cao xuống thấp
                  </Option>
                </Select>
              </div>
            </div>
            <div className="mt-10">{children}</div>
            {/* <div className="container px-5 py-5 mx-auto lg:px-0">
                <div className="flex flex-wrap -m-4">
                  {getAllProduct.map((item, index) => {
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
                                  Delete To Cart
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
                </div>
              </div> */}
          </div>
        </section>
      </LayoutHome>
    </>
  );
};

export default LayoutProduct;
