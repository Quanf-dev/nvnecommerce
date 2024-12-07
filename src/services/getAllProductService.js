import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import React from "react";

const getAllProductService = () => {
  // Sử dụng useContext để lấy hàm setLoading từ myContext
  // Hàm getAllProductFunction để lấy tất cả sản phẩm
  const getAllProductFunction = async (setGetAllProduct, setLoading) => {
    setLoading(true); // Đặt trạng thái loading thành true trước khi bắt đầu lấy dữ liệu
    try {
      // Tạo truy vấn để lấy dữ liệu từ collection "products" và sắp xếp theo "time"
      const getProductsQuery = query(
        collection(fireDB, "products"),
        orderBy("time_added")
      );

      // Đăng ký listener để lắng nghe thay đổi trong thời gian thực
      const unsubscribe = onSnapshot(getProductsQuery, (querySnapshot) => {
        let productArray = [];
        // Duyệt qua mỗi tài liệu trong snapshot và thêm vào mảng productArray
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        // Cập nhật state setGetAllProduct với dữ liệu mới
        setGetAllProduct(productArray);
        setLoading(false); // Đặt trạng thái loading thành false sau khi hoàn thành
      });

      // Trả về một hàm dọn dẹp để hủy bỏ listener khi component unmount
      return () => unsubscribe();
    } catch (error) {
      console.log(error); // In lỗi ra console nếu có
      setLoading(false); // Đặt trạng thái loading thành false trong trường hợp xảy ra lỗi
    }
  };

  return getAllProductFunction; // Trả về hàm getAllProductFunction để sử dụng ở nơi khác
};

export default getAllProductService; // Xuất hàm getAllProductService để sử dụng ở nơi khác
