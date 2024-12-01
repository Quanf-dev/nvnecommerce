import React, { useState } from "react";
import AddProductImages from "./AddProductImages";
import AddProductDetails from "./AddProductDetails";
import AddProductDesc from "./AddProductDesc";

const AddProductPage2 = () => {
  return (
    <div className="container px-4 mx-auto mt-4">
      <div className="flex flex-wrap -mx-4">
        <AddProductImages />
        <AddProductDetails />
        <AddProductDesc />
      </div>
    </div>
  );
};

export default AddProductPage2;
