import React, { useContext, useEffect, useState } from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import Layout from "../../layout/Layout";
import ProductDesc from "./ProductDesc";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import getSingleProductService from "../../services/getSingleProductService";
import Loader from "../../components/loader/Loader";

const ProductPage = () => {
  const { loading, product, setProduct } = useContext(myContext); // Lấy trạng thái loading từ context
  const getSingleProductFunction = getSingleProductService(); // Khởi tạo dịch vụ lấy sản phẩm
  // Trạng thái cho các màu có trong sản phẩm
  const [arrayColor, setArrayColor] = useState(() =>
    Object.fromEntries(
      Object.entries(product.images || {}) // Bắt đầu từ product.images
        .filter(([key, value]) => Array.isArray(value) && value.length === 4) // Lọc nếu là mảng chứa 4 hình
        .map(([key, value]) => [
          key,
          { images: value, active: false }, // Thêm trường active mặc định
        ])
    )
  );

  // Cập nhật arrayColor khi dữ liệu sản phẩm thay đổi
  useEffect(() => {
    const updatedArrayColor = Object.fromEntries(
      Object.entries(product.images || {})
        .filter(([key, value]) => Array.isArray(value) && value.length === 4)
        .map(([key, value]) => [key, { images: value, active: false }])
    );
    setArrayColor(updatedArrayColor);
  }, [product.images]);

  // Lấy thông tin sản phẩm khi ID thay đổi
  useEffect(() => {
    getSingleProductFunction(setProduct, product.id);
  }, [product.id]);

  return (
    <Layout>
      <div className="container px-4 mx-auto mt-4">
        <Breadcrumb />
        {loading ? (
          <div className="flex items-center justify-center h-screen py-10">
            <Loader /> {/* Hiển thị loader khi đang tải */}
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4">
            <ProductImages />
            <ProductDetails
              setArrayColor={setArrayColor}
              arrayColor={arrayColor}
            />
            <ProductDesc />{" "}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
