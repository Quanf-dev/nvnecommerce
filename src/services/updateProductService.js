import React, { useContext } from "react";
import myContext from "../context/myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const updateProductService = () => {
  // Sử dụng useContext để lấy hàm setLoading từ myContext
  const { setLoading } = useContext(myContext);
  // Sử dụng useNavigate để điều hướng người dùng
  const navigate = useNavigate();

  // Hàm updateProductFunction để cập nhật sản phẩm
  const updateProductFunction = async (product, id) => {
    setLoading(true); // Đặt trạng thái loading thành true
    try {
      // Cập nhật dữ liệu sản phẩm trong Firestore
      await setDoc(doc(fireDB, "products", id), product);
      // Hiển thị thông báo thành công
      toast.success("Product Updated successfully");
      setLoading(false); // Đặt trạng thái loading thành false
      // Điều hướng người dùng về trang admin-dashboard
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error); // In lỗi ra console
      setLoading(false); // Đặt trạng thái loading thành false
      // Hiển thị thông báo lỗi
      toast.error("Failed to update product");
    }
  };

  return updateProductFunction; // Trả về hàm updateProductFunction
};

export default updateProductService; // Xuất hàm updateProductService để sử dụng ở nơi khác
