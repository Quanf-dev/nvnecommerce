import React, { useContext, useState } from "react";
import { Button, Input, Typography, Textarea } from "@material-tailwind/react";
import myContext from "../../../context/myContext";
import UploadMultipleImagesComponent from "../addProductImages/UploadMultipleImagesComponent";

const AddProductDesc = () => {
  const { product, setProduct } = useContext(myContext);
  const [addFeature, setAddFeature] = useState(
    product.description.features_desc || []
  );

  const handleAddFeature = (index, value) => {
    const newAddFeature = [...addFeature];
    newAddFeature[index] = value;
    setAddFeature(newAddFeature);
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
        <div className="flex flex-col gap-4 mt-4 max-w-[1000px]">
          <Typography className="font-bold">
            Giới thiệu {product.name}
          </Typography>
          <Textarea
            name="tittle"
            value={product.description.title}
            onChange={(e) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                description: {
                  ...prevProduct.description,
                  title: e.target.value,
                },
              }))
            }
            label="Giới thiệu chi tiết sản phẩm"
            className="mb-5 text-textDesc"
          />
          <UploadMultipleImagesComponent images={"images_desc"} />
          <ul className="flex flex-col gap-2 mt-2">
            {addFeature.map((info, index) => (
              <li key={index} className="flex gap-2">
                <Input
                  name="features_desc"
                  type="text"
                  value={info}
                  onChange={(e) => handleAddFeature(index, e.target.value)}
                  label={`Đặc điểm ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <Button
            onClick={addInputField}
            className="mt-2 text-black bg-white shadow-none hover:shadow-none"
          >
            Thêm Đặc điểm mục đích ra đời của sản phẩm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProductDesc;
