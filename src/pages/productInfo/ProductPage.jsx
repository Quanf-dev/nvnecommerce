import React, { useContext, useEffect, useState, Suspense } from "react";
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
  const { loading, product, setProduct } = useContext(myContext); // Sử dụng context để lấy loading, product, setProduct
  const [arrayColor, setArrayColor] = useState({}); // Khởi tạo state arrayColor
  const { url } = useParams(); // Lấy giá trị url từ tham số

  const getSingleProductFunction = getSingleProductService(); // Gọi hàm dịch vụ để lấy sản phẩm đơn

  useEffect(() => {
    // useEffect chạy khi product.images thay đổi
    if (product.images) {
      const newArrayColor = Object.fromEntries(
        Object.entries(product.images || {})
          .filter(([key, value]) => Array.isArray(value) && value.length === 4) // Lọc những phần tử có mảng dài 4
          .map(([key, value]) => [key, { images: value, active: false }]) // Tạo đối tượng mới với cấu trúc { images: value, active: false }
      );
      setArrayColor(newArrayColor); // Cập nhật state arrayColor
    }
  }, [product.images]); // Chỉ chạy khi product.images thay đổi

  useEffect(() => {
    // useEffect chạy khi url thay đổi
    if (url && typeof url === "string" && url.trim() !== "") {
      // Kiểm tra url hợp lệ
      const index = url.indexOf("-i.");
      if (index !== -1) {
        const id = url.substring(index + 3);
        if (id.trim()) {
          getSingleProductFunction(setProduct, id); // Gọi hàm để lấy sản phẩm đơn với id
        }
      }
    }
  }, [url]); // Chỉ chạy khi url thay đổi

  return (
    <Layout>
      <div className="container mx-auto mt-4">
        <Breadcrumb /> {/* Hiển thị breadcrumb */}
        {loading ? ( // Kiểm tra trạng thái loading
          <div className="flex items-center justify-center h-screen py-10">
            <Loader /> {/* Hiển thị loader khi đang tải */}
          </div>
        ) : (
          <Suspense fallback={<Loader />}>
            <div className="flex flex-wrap -mx-4">
              <ProductImages /> {/* Hiển thị hình ảnh sản phẩm */}
              <ProductDetails
                setArrayColor={setArrayColor}
                arrayColor={arrayColor} // Truyền state arrayColor và setArrayColor vào component ProductDetails
              />
              <ProductDesc /> {/* Hiển thị mô tả sản phẩm */}
            </div>
          </Suspense>
        )}
      </div>
    </Layout>
  );
};

export default ProductPage;
