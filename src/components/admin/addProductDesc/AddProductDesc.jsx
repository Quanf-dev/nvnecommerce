import React, { useState } from "react";
import { Button, Input, Typography, Textarea } from "@material-tailwind/react";
import AddProductImages from "../addProductImages/AddProductImages";

const AddProductDesc = ({ Product, setProduct }) => {
  const [addFeature, setAddFeature] = useState([]);

  const handleAddFeature = (index, value) => {
    const newAddFeature = [...AddFeature];
    newAddFeature[index] = value;
    setAdditionalInfos(newAddFeature);
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: {
        ...prevProduct.description,
        features_desc: newAddFeature,
      },
    }));
  };
  const addInputField = () => {
    setAddFeature([...addFeature, ""]);
  };

  return (
    <div className="w-full mt-10">
      <div className="py-6 border-t-2 border-[#0000001B]">
        <>
          <div className="flex flex-col gap-4 mt-4 max-w-[1000px]">
            <Typography className="font-bold">
              Giới thiệu {Product.name}
            </Typography>
            <Textarea
              label="Giới thiệu chi tiết sản phẩm"
              classname="mb-5 text-textDesc"
            ></Textarea>
            <AddProductImages />
            <ul className="flex flex-col gap-2 mt-2">
              {" "}
              {addFeature.map((info, index) => (
                <li key={index} className="flex gap-2 ">
                  {" "}
                  <Input
                    type="text"
                    value={info}
                    onChange={(e) => handleAddFeature(index, e.target.value)}
                    label={`Đặc điểm ${index + 1}`}
                  />{" "}
                </li>
              ))}{" "}
            </ul>{" "}
            <Button
              onClick={addInputField}
              className="mt-2 text-black bg-white shadow-none hover:shadow-none"
            >
              {" "}
              Thêm Đặc điểm mục đích ra đời của sản phẩm{" "}
            </Button>{" "}
          </div>
        </>
      </div>
    </div>
  );
};

export default AddProductDesc;
