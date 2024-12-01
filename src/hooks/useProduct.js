import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";

const useProduct = () => {
  const [Product, setProduct] = useState({
    name: "", // Tên sản phẩm
    old_price: 0.0, // Giá sản phẩm
    new_price: 0.0, // Giá sản phẩm
    rating: 1,
    images: {
      color_1: [], // Hình ảnh màu 1
      color_2: [], // Hình ảnh màu 2
      color_3: [], // Hình ảnh màu 3
      color_4: [], // Hình ảnh màu 4
    },
    product_category: "", // Loại sản phẩm
    product_information: {
      warranty: "", // Thông tin bảo hành
      material: "", // Vật liệu sản phẩm
      seat_height: "", // Chiều cao mặt ngồi
      width: "", // Ngang
      depth: "", // Sâu height: "",
      height: "", // Cao
      additional_info: [], // Thông tin bổ sung
    },
    colors: [], // Màu sắc sản phẩm
    product_code: "", // Mã sản phẩm
    category: "", // Danh mục sản phẩm
    keywords: [], // Các từ khóa liên quan đến sản phẩm
    time_added: Timestamp.now(), // Thời gian thêm sản phẩm (Firebase Timestamp)
    date_added: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }), // Ngày thêm sản phẩm
    description: {
      features_desc: [], // Đặc điểm, tính năng sản phẩm
      images: [], // Mảng hình ảnh của sản phẩm (URLs)
    },
  });

  return [Product, setProduct];
};

export default useProduct;
