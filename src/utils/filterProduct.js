import React, { useContext } from "react";
import myContext from "../context/myContext";

const filterProduct = ({ category }) => {
  const { getAllProduct } = useContext(myContext);
  return getAllProduct.filter((obj) =>
    obj.product_category.toLowerCase().includes(category.toLowerCase())
  );
};

export default filterProduct;
