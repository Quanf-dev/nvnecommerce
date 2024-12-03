import React, { useState } from "react";
import LayoutHome from "./../../../layout/LayoutHome";
import useProduct from "../../../hooks/useProduct";
import AddProductDetails from "../../../components/admin/addProductDetails/AddProductDetails";
import AddProductDesc from "../../../components/admin/addProductDesc/AddProductDesc";

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
