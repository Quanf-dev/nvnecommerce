import {
  Button,
  Input,
  Option,
  Rating,
  Select,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddProductImages from "./AddProductImages";
import useProduct from "./../../../hooks/useProduct";

const AddProductDetails = ({ Product, setProduct }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    console.log(Product.name);
  };
  return (
    <div className="flex w-full">
      <div className="flex-1">
        {" "}
        <h3 className="mb-2 font-semibold">Sản phầm gồm nhưng màu nào:</h3>
        <TabsColor />
      </div>
      <div>
        <Input
          type="text"
          name="name"
          value={Product.name}
          label="Tên sản phẩm"
          className="flex items-center text-xl text-gray-500"
          onChange={handleInputChange}
        />
        <div className="flex my-4">
          <Input
            type="text"
            name="old_price"
            value={Product.old_price}
            label="Giá cũ"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="new_price"
            value={Product.new_price}
            label="Giá mới"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <Rating
            value={Product.rating}
            onChange={(value) =>
              setProduct((prevProduct) => ({ ...prevProduct, rating: value }))
            }
          />
        </div>

        <AddCategoryOption Product={Product} setProduct={setProduct} />
        <AddInputProductInformation Product={Product} setProduct={setProduct} />

        <div className="mt-2 border-b-[1px] border-textBackground-light"></div>

        <div className="flex flex-col gap-2 mt-4">
          {" "}
          <Input
            label="Mã sản phẩm"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
          <Input
            label="Danh mục"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
          <Input
            label="Từ khóa"
            className="border-b-[1px] border-textBackground-light text-[0.9rem] font-normal leading-6 text-textDesc"
          />{" "}
        </div>
      </div>
    </div>
  );
};

// hàm thêm màu và chuyển tab hình theo màu
const TabsColor = () => {
  const [ProductColor, setProductColor] = useState([]);
  [];
  const handleAddColor = (color) => {
    // Kiểm tra xem color đã tồn tại trong mảng ProductColor chưa
    if (!ProductColor.includes(color))
      setProductColor([...ProductColor, color]);
  };
  return (
    <Tabs>
      {" "}
      <TabList className="flex space-x-2">
        {" "}
        <Tab
          className={`w-8 h-8 bg-black rounded-full ${
            ProductColor.includes("Black")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Black")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-gray-300 rounded-full ${
            ProductColor.includes("Gray")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Gray")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-pink-300 rounded-full ${
            ProductColor.includes("Pink")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("Pink")}
        ></Tab>{" "}
        <Tab
          className={`w-8 h-8 bg-white border-2 border-gray-700 rounded-full ${
            ProductColor.includes("White")
              ? "outline outline-primary outline-offset-2"
              : ""
          }`}
          onClick={() => handleAddColor("White")}
        ></Tab>{" "}
      </TabList>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu đen</h3> <AddProductImages />{" "}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu xám</h3> <AddProductImages />{" "}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu hồng</h3> <AddProductImages />{" "}
      </TabPanel>{" "}
      <TabPanel className="text-center">
        {" "}
        <h3>4 Hình của màu trắng</h3> <AddProductImages />{" "}
      </TabPanel>
    </Tabs>
  );
};

//hàm thêm sản phẩm chi tiết
const AddInputProductInformation = ({ setProduct, Product }) => {
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
  console.log(additionalInfos);

  return (
    <div>
      <ul className="grid grid-cols-2 gap-1 ">
        <li>
          <Input
            label="Bảo hành"
            name="warranty"
            value={Product.product_information.warranty}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Vật liệu"
            name="material"
            value={Product.product_information.material}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Chiều cao mặt ngồi"
            name="seat_height"
            value={Product.product_information.seat_height}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Ngang"
            name="width"
            value={Product.product_information.width}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Sâu"
            name="depth"
            value={Product.product_information.depth}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            label="Cao"
            name="height"
            value={Product.product_information.height}
            onChange={handleInputChange}
            className="border-b-2 border-dotted text-[0.9rem] pb-1"
          />
        </li>
        <li>
          <Input
            type="text"
            label="Thương hiệu"
            name="brand"
            value={Product.product_information.brand}
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

//hàm thêm loại sản phẩm
const AddCategoryOption = ({ Product, setProduct }) => {
  const categoryList = [
    {
      name: "Ghế Giám Đốc",
      quantity: 43,
    },
    {
      name: "Ghế Trưởng Phòng",
      quantity: 29,
    },
    {
      name: "Ghế Nhân Viên",
      quantity: 162,
    },
    {
      name: "Ghế Công Thái Học",
      quantity: 134,
    },
    {
      name: "Ghế Phòng Họp",
      quantity: 55,
    },
    {
      name: "Ghế Ngồi Máy Tính",
      quantity: 47,
    },
    {
      name: "Ghế Băng Chờ",
      quantity: 119,
    },
    {
      name: "Ghế Chân Quỳ",
      quantity: 72,
    },
    {
      name: "Ghế Xoay",
      quantity: 53,
    },
    {
      name: "Ghế Lưới",
      quantity: 38,
    },
    {
      name: "Ghế Da Văn Phòng",
      quantity: 64,
    },
    {
      name: "Ghế Gaming",
      quantity: 28,
    },
    {
      name: "Bàn Học Sinh",
      quantity: 81,
    },
    {
      name: "Ghế Học Sinh",
      quantity: 36,
    },
    {
      name: "Bàn Ghế Bar – Cafe",
      quantity: 44,
    },
    {
      name: "Kệ Tivi",
      quantity: 0, // Số lượng có thể thay đổi nếu có thông tin cụ thể
    },
  ];

  return (
    <div className="my-4">
      <Select
        label="Lựa chọn loại sản phẩm "
        onChange={(value) => {
          setProduct({
            ...Product,
            product_category: value,
          });
        }}
      >
        {categoryList.map((value, index) => {
          const { name } = value;
          return (
            <Option className="first-letter:uppercase" key={index}>
              {name}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default AddProductDetails;
