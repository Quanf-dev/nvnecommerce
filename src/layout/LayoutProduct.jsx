import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import useCart from "../hooks/useCart";
import {
  Button,
  ListItem,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
} from "@material-tailwind/react";
import ProductHeader from "../components/productHeader/ProductHeader";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import LayoutHome from "./LayoutHome";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Navbar from "../components/navbar/Navbar";
import Announcement from "../components/announcement/Announcement ";
import Footer from "../components/footer/Footer";
import Track from "../components/track/Track";
import { RiArrowUpDownLine } from "@remixicon/react";

const LayoutProduct = ({ children }) => {
  const navigate = useNavigate();
  const { nameCategory } = useContext(myContext);

  const { cartItems, deleteCart, addCart } = useCart();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <Announcement />
      <Navbar />
      {/* Heading  */}
      <ProductHeader />
      {/* main  */}
      <LayoutHome>
        <section className="flex py-10 text-gray-600 body-font ">
          {/* left */}
          <div className="hidden lg:block">
            <CategoryFilter />
          </div>
          {/* Right */}
          <div className="relative flex-1 lg:ml-10 bottom-2">
            <div className="flex items-center justify-between">
              <div>
                <Breadcrumb />
              </div>
              <div className="hidden w-56 customSelect lg:block ">
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

              {/* Popover mobile  */}
              <Popover placement="bottom-end">
                <PopoverHandler>
                  <RiArrowUpDownLine />
                </PopoverHandler>
                <PopoverContent>
                  <ListItem className="cursor-pointer" value="sortedByPopular">
                    Thứ tự theo mức độ phổ biến
                  </ListItem>
                  <ListItem className="cursor-pointer" value="sortedByRating">
                    Thứ tự theo điểm đánh giá
                  </ListItem>
                  <ListItem className="cursor-pointer" value="sortedByNew">
                    Mới nhất
                  </ListItem>
                  <ListItem className="cursor-pointer" value="sortedIncrement">
                    Thứ tự theo giá: thấp đến cao
                  </ListItem>
                  <ListItem className="cursor-pointer" value="sortedDecrement">
                    Thứ tự theo giá: cao xuống thấp
                  </ListItem>
                </PopoverContent>
              </Popover>
            </div>
            <div className="mt-4 ">{children}</div>
          </div>
        </section>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default LayoutProduct;
