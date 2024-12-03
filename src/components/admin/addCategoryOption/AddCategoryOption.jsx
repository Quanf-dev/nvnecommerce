//hàm thêm loại sản phẩm

import { Option, Select } from "@material-tailwind/react";

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

export default AddCategoryOption;
