import React, { useState } from "react";
import AddProductDetails from "./AddProductDetails";
import AddProductDesc from "./AddProductDesc";
import LayoutHome from "./../../../layout/LayoutHome";
import useProduct from "../../../hooks/useProduct";

const AddProductPage2 = () => {
  const [Product, setProduct] = useProduct();

  return (
    <LayoutHome>
      <div className="px-4 mx-auto mt-4">
        <div className="flex flex-wrap -mx-4">
          <AddProductDetails Product={Product} setProduct={setProduct} />
          <AddProductDesc Product={Product} setProduct={setProduct} />
        </div>
      </div>
    </LayoutHome>
  );
};

export default AddProductPage2;
