//hàm thêm sản phẩm chi tiết

import { Button, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import myContext from "../../../context/myContext";

const AddInputProductInformation = () => {
  const { product, setProduct } = useContext(myContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_information: {
        ...prevProduct.product_information,
        [name]: value,
      },
    }));
  };

  // hàm thêm dynamic đặc điểm của product trong product_infomation
  const [additionalInfos, setAdditionalInfos] = useState([]);

  const handleAdditionalInfoChange = (index, value) => {
    const newAdditionalInfos = [...additionalInfos];
    newAdditionalInfos[index] = value;
    setAdditionalInfos(newAdditionalInfos);
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_information: {
        ...prevProduct.product_information,
        additional_info: newAdditionalInfos,
      },
    }));
  };
  const addInputField = () => {
    setAdditionalInfos([...additionalInfos, ""]);
  };

  return (
    <div>
      <ul className="grid grid-cols-2 gap-1 ">
        <li>
          <Input
            label="Bảo hành"
            name="warranty"
            value={product.product_information.warranty}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Vật liệu"
            name="material"
            value={product.product_information.material}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Chiều cao mặt ngồi"
            name="seat_height"
            value={product.product_information.seat_height}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Ngang"
            name="width"
            value={product.product_information.width}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Sâu"
            name="depth"
            value={product.product_information.depth}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Cao"
            name="height"
            value={product.product_information.height}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            type="text"
            label="Thương hiệu"
            name="brand"
            value={product.product_information.brand}
            onChange={handleInputChange}
          />
        </li>
      </ul>
      <ul className="flex flex-col gap-2 mt-2">
        {" "}
        {additionalInfos.map((info, index) => (
          <li key={index} className="flex gap-2 ">
            {" "}
            <Input
              type="text"
              value={info}
              onChange={(e) =>
                handleAdditionalInfoChange(index, e.target.value)
              }
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
        Thêm Đặc điểm sản phẩm{" "}
      </Button>{" "}
    </div>
  );
};

export default AddInputProductInformation;
