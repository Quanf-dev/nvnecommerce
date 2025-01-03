import { useContext } from "react";
import myContext from "../context/myContext";

const filterProduct = ({ category }) => {
  const { getAllProduct } = useContext(myContext);
  const categories = Array.isArray(category) ? category : [category];
  return getAllProduct.filter((obj) =>
    categories.some((cat) =>
      obj.product_category.toLowerCase().includes(cat.toLowerCase())
    )
  );
};

export default filterProduct;
