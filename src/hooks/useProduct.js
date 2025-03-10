import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "", // Tên sản phẩm
    old_price: 0.0, // Giá sản phẩm
    new_price: 0.0, // Giá sản phẩm
    rating: 1,
    quantity: 1,
    images: {
      color_black: [], // Hình ảnh màu 1
      color_gray: [], // Hình ảnh màu 2
      color_pink: [], // Hình ảnh màu 3
      color_white: [], // Hình ảnh màu 4
      images_desc: [], // hình ảnh chi tiết của sản phẩm ở mô tả (URLs)
    },
    quantity: 1,
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
    product_code: "", // Mã sản phẩm
    keywords: "", // Các từ khóa liên quan đến sản phẩm
    time_added: Timestamp.now(), // Thời gian thêm sản phẩm (Firebase Timestamp)
    date_added: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }), // Ngày thêm sản phẩm
    description: {
      title: "",
      features_desc: [], // Đặc điểm, tính năng sản phẩm
    },
  });

  return [product, setProduct];
};

export default useProduct;
