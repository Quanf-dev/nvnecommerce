import React, { useContext } from "react";
import myContext from "../context/myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
const getSingleProductService = () => {
  // Sử dụng useContext để lấy hàm setLoading từ myContext
  const { setLoading } = useContext(myContext);

  // Hàm getSingleProductFunction để lấy thông tin sản phẩm theo ID
  const getSingleProductFunction = async (setProduct, id) => {
    setLoading(true); // Đặt trạng thái loading thành true trước khi bắt đầu lấy dữ liệu
    try {
      // Lấy dữ liệu sản phẩm từ Firestore dựa trên ID
      const productTemp = await getDoc(doc(fireDB, "products", id));
      // Nhận dữ liệu sản phẩm
      const product = productTemp.data();
      console.log(product);

      // Cập nhật state setProduct với thông tin sản phẩm nhận được
      setProduct((prevState) => ({
        // Giữ lại các giá trị cũ
        ...prevState,
        id: id,
        ...product, // Cập nhật với dữ liệu mới
      }));
      setLoading(false); // Đặt trạng thái loading thành false sau khi hoàn thành
    } catch (error) {
      console.log(error); // In lỗi ra console nếu có
      setLoading(false); // Đặt trạng thái loading thành false trong trường hợp xảy ra lỗi
    }
  };

  return getSingleProductFunction; // Trả về hàm getSingleProductFunction để sử dụng ở nơi khác
};

export default getSingleProductService; // Xuất hàm getSingleProductService để sử dụng ở nơi khác
