import React, { useContext, useState } from "react";
import LayoutHome from "./../../../layout/LayoutHome";
import AddProductDetails from "../../../components/admin/addProductDetails/AddProductDetails";
import AddProductDesc from "../../../components/admin/addProductDesc/AddProductDesc";
import { Button } from "@material-tailwind/react";
import addProductService from "../../../services/addProductService";
import myContext from "../../../context/myContext";

const AddProductPage2 = () => {
  const addProductFunction = addProductService();
  const { product, setProduct } = useContext(myContext);

  return (
    <LayoutHome>
      <AddProductDetails />
      <AddProductDesc />
      <Button
        className="w-full bg-primary hover:shadow-primary"
        onClick={() => addProductFunction(product)}
      >
        Thêm Sản Phẩm
      </Button>
    </LayoutHome>
  );
};

export default AddProductPage2;
