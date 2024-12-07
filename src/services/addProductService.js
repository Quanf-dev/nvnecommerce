import toast from "react-hot-toast";
import { fireDB } from "../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import myContext from "../context/myContext";
import clearLocalStorageColorValue from "../utils/clearLocalStorageColorValue";

const addProductService = () => {
  // Sử dụng useContext để lấy hàm setLoading từ myContext
  const { setLoading } = useContext(myContext);
  // Sử dụng useNavigate để điều hướng người dùng
  const navigate = useNavigate();

  // Hàm addProductFunction để thêm sản phẩm mới
  const addProductFunction = async (product) => {
    // Kiểm tra các trường nhập liệu, nếu có trường nào rỗng thì hiển thị thông báo lỗi
    if (isProductValid(product)) {
      return toast.error("All fields are required");
    }

    setLoading(true); // Đặt trạng thái loading thành true trước khi bắt đầu thêm sản phẩm
    try {
      // Tạo reference tới collection "products" trong Firestore
      const productRef = collection(fireDB, "products");
      // Thêm tài liệu mới vào collection "products" với dữ liệu từ product
      await addDoc(productRef, product);
      toast.success("Add product successfully"); // Hiển thị thông báo thành công
      navigate("/admin-dashboard"); // Điều hướng người dùng về trang admin-dashboard
      clearLocalStorageColorValue();
      setLoading(false); // Đặt trạng thái loading thành false sau khi hoàn thành
    } catch (error) {
      console.log(error); // In lỗi ra console nếu có
      setLoading(false); // Đặt trạng thái loading thành false trong trường hợp xảy ra lỗi
      toast.error("Add product failed"); // Hiển thị thông báo lỗi
    }
  };

  return addProductFunction; // Trả về hàm addProductFunction để sử dụng ở nơi khác
};

const isProductValid = (product) => {
  return (
    product.name === "" ||
    product.new_price === 0 ||
    product.product_code === "" ||
    product.category === "" ||
    product.description.title === "" ||
    Object.values(product.images).every(
      (imagesArray) => imagesArray.length === 0
    ) ||
    product.product_information.warranty === "" ||
    product.product_information.material === "" ||
    product.product_information.seat_height === "" ||
    product.product_information.width === "" ||
    product.product_information.depth === "" ||
    product.product_information.height === ""
  );
};

export default addProductService; // Xuất hàm addProductService để sử dụng ở nơi khác
