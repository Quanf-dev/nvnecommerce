import toast from "react-hot-toast";
import { fireDB } from "../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import myContext from "../context/myContext";

const addProductService = () => {
  // Sử dụng useContext để lấy hàm setLoading từ myContext
  const { setLoading } = useContext(myContext);
  // Sử dụng useNavigate để điều hướng người dùng
  const navigate = useNavigate();

  // Hàm addProductFunction để thêm sản phẩm mới
  const addProductFunction = async (product) => {
    // Kiểm tra các trường nhập liệu, nếu có trường nào rỗng thì hiển thị thông báo lỗi
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "" ||
      product.description === ""
    ) {
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
      setLoading(false); // Đặt trạng thái loading thành false sau khi hoàn thành
    } catch (error) {
      console.log(error); // In lỗi ra console nếu có
      setLoading(false); // Đặt trạng thái loading thành false trong trường hợp xảy ra lỗi
      toast.error("Add product failed"); // Hiển thị thông báo lỗi
    }
  };

  return addProductFunction; // Trả về hàm addProductFunction để sử dụng ở nơi khác
};

export default addProductService; // Xuất hàm addProductService để sử dụng ở nơi khác
