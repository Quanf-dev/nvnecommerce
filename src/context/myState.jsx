import { useEffect, useState } from "react";
import MyContext from "./myContext";
import getAllProductService from "../services/getAllProductService";
import useProduct from "../hooks/useProduct";

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
  }, []);

  const [product, setProduct] = useProduct();

  // Trạng thái cho ảnh thu nhỏ
  const [thumbnails, setThumbnails] = useState([
    { src: "", alt: "Thumbnail 1" },
    { src: "", alt: "Thumbnail 2" },
    { src: "", alt: "Thumbnail 3" },
    { src: "", alt: "Thumbnail 4" },
  ]);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    // Sử dụng MyContext.Provider để cung cấp giá trị cho context
    <MyContext.Provider
      value={{
        openMobileMenu,
        setOpenMobileMenu,
        loading,
        setLoading,
        getAllProduct,
        nameCategory,
        setNameCategory,
        product,
        setProduct,
        thumbnails,
        setThumbnails,
      }}
    >
      {children} {/* Hiển thị các thành phần con */}
    </MyContext.Provider>
  );
}

export default MyState; // Xuất thành phần MyState để sử dụng ở nơi khác
