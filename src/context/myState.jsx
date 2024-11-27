import { useEffect, useState } from "react";
import MyContext from "./myContext";
import getAllProductService from "../services/getAllProductService";
import getAllOrderService from "./../services/getAllOrderService";

function MyState({ children }) {
  // Sử dụng useState để khai báo các state loading và getAllProduct và getAllOrder
  const [loading, setLoading] = useState(false);
  const [getAllProduct, setGetAllProduct] = useState([]);

  const [nameCategory, setNameCategory] = useState(
    localStorage.getItem("category") || ""
  );
  useEffect(() => {
    // Hàm fetchData để lấy dữ liệu sản phẩm
    const fetchData = async () => {
      // Lấy hàm getAllProductFunction từ dịch vụ
      const getAllProductFunction = getAllProductService();
      // Gọi hàm getAllProductFunction để cập nhật state getAllProduct
      getAllProductFunction(setGetAllProduct, setLoading);
    };
    // Gọi hàm fetchData khi component mount
    fetchData();
  }, []); // Mảng phụ thuộc rỗng [] nghĩa là useEffect chỉ chạy một lần khi component mount

  return (
    // Sử dụng MyContext.Provider để cung cấp giá trị cho context
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllProduct,
        nameCategory,
        setNameCategory,
      }}
    >
      {children} {/* Hiển thị các thành phần con */}
    </MyContext.Provider>
  );
}

export default MyState; // Xuất thành phần MyState để sử dụng ở nơi khác
