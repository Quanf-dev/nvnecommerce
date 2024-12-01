import { Timestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import addProductService from "../../services/addProductService";

const categoryList = [
  {
    name: "Ghế Giám Đốc",
    quantity: 43,
  },
  {
    name: "Ghế Trưởng Phòng",
    quantity: 29,
  },
  {
    name: "Ghế Nhân Viên",
    quantity: 162,
  },
  {
    name: "Ghế Công Thái Học",
    quantity: 134,
  },
  {
    name: "Ghế Phòng Họp",
    quantity: 55,
  },
  {
    name: "Ghế Ngồi Máy Tính",
    quantity: 47,
  },
  {
    name: "Ghế Băng Chờ",
    quantity: 119,
  },
  {
    name: "Ghế Chân Quỳ",
    quantity: 72,
  },
  {
    name: "Ghế Xoay",
    quantity: 53,
  },
  {
    name: "Ghế Lưới",
    quantity: 38,
  },
  {
    name: "Ghế Da Văn Phòng",
    quantity: 64,
  },
  {
    name: "Ghế Gaming",
    quantity: 28,
  },
  {
    name: "Bàn Học Sinh",
    quantity: 81,
  },
  {
    name: "Ghế Học Sinh",
    quantity: 36,
  },
  {
    name: "Bàn Ghế Bar – Cafe",
    quantity: 44,
  },
  {
    name: "Kệ Tivi",
    quantity: 0, // Số lượng có thể thay đổi nếu có thông tin cụ thể
  },
];

const AddProductPage = () => {
  const handleAddField = (field) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      product_information: {
        ...prevProduct.product_information,
        [field]: "", // Thêm trường mới với giá trị rỗng
      },
    }));
  };

  const handleAutoAddFields = () => {
    const newProductInfo = {
      ...product.product_information,
      warranty: "2 years", // Automatically add default warranty
      quantity: 10, // Automatically set default quantity
      material: "Leather", // Automatically set material type
      size: "Medium", // Automatically set size
      additional_info: "High quality material", // Automatically add additional info
    };

    setProduct({
      ...product,
      product_information: newProductInfo, // Update product information with new fields
    });
  };

  const handleInputChange = (e, field) => {
    setProduct({
      ...product,
      product_information: {
        ...product.product_information,
        [field]: e.target.value,
      },
    });
  };
  const { loading } = useContext(myContext);
  const [product, setProduct] = useState({
    name: "", // Tên sản phẩm
    price: 0.0, // Giá sản phẩm
    images: {
      color_1: [], // Hình ảnh màu 1
      color_2: [], // Hình ảnh màu 2
    },
    product_category: "", // Loại sản phẩm
    product_information: {
      warranty: "", // Thông tin bảo hành
      quantity: 1, // Số lượng sản phẩm
      material: "", // Vật liệu sản phẩm
      size: "", // Kích thước sản phẩm
      additional_info: "", // Thông tin bổ sung
    },
    colors: [], // Màu sắc sản phẩm
    product_code: "", // Mã sản phẩm
    category: "", // Danh mục sản phẩm
    keywords: [], // Các từ khóa liên quan đến sản phẩm
    time_added: Timestamp.now(), // Thời gian thêm sản phẩm (Firebase Timestamp)
    date_added: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }), // Ngày thêm sản phẩm
    description: {
      title: "", // Tiêu đề mô tả sản phẩm
      features: "", // Đặc điểm, tính năng sản phẩm
      images: [], // Mảng hình ảnh của sản phẩm (URLs)
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    // await addProductService(product);
  };

  const handleImageChange = (color, e) => {
    setProduct({
      ...product,
      images: {
        ...product.images,
        [color]: e.target.value.split(",").map((url) => url.trim()), // Tách chuỗi thành mảng và xóa khoảng trắng
      },
    });
  };

  const handleAddColor = () => {
    const newColorKey = `color_${Object.keys(product.images).length + 1}`;
    setProduct({
      ...product,
      images: {
        ...product.images,
        [newColorKey]: [], // Thêm nhóm hình ảnh mới cho màu
      },
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        {loading && <Loader />}
        <div className="px-8 w-[1000px] py-6 border border-pink-100 shadow-md login_Form bg-pink-50 rounded-xl">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-center text-pink-500 ">
              Add Product
            </h2>
          </div>

          {/* Input One - Tên sản phẩm */}
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={(e) => {
                setProduct({
                  ...product,
                  name: e.target.value,
                });
              }}
              placeholder="Product Name"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Two - Giá sản phẩm */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value),
                });
              }}
              placeholder="Product Price"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Three - Hình ảnh sản phẩm (URL) */}
          {/* Product Image URLs for Color 1 */}
          <div className="mb-3">
            <input
              type="text"
              value={product.images.color_1.join(", ")} // Hiển thị mảng hình ảnh màu 1
              onChange={(e) => handleImageChange("color_1", e)}
              placeholder="Product Image URLs for Color 1 (separate with commas)"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Product Image URLs for Color 2 */}
          <div className="mb-3">
            <input
              type="text"
              value={product.images.color_2.join(", ")} // Hiển thị mảng hình ảnh màu 2
              onChange={(e) => handleImageChange("color_2", e)}
              placeholder="Product Image URLs for Color 2 (separate with commas)"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Dynamically add more color groups */}
          {Object.keys(product.images).map((colorKey) => (
            <div key={colorKey} className="mb-3">
              <input
                type="text"
                value={product.images[colorKey].join(", ")} // Hiển thị mảng hình ảnh cho mỗi màu
                onChange={(e) => handleImageChange(colorKey, e)}
                placeholder={`Product Image URLs for ${colorKey} (separate with commas)`}
                className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
              />
            </div>
          ))}

          {/* Add more color input fields */}
          <button
            type="button"
            onClick={handleAddColor}
            className="w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 "
          >
            Add More Colors
          </button>

          {/* Input Four - Danh mục sản phẩm */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="w-full px-1 py-2 text-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className="first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five - Thông tin bảo hành */}
          <div>
            <input
              type="text"
              placeholder="Warranty"
              value={product.product_information.warranty}
              onChange={(e) => handleInputChange(e, "warranty")}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="Quantity"
              value={product.product_information.quantity}
              onChange={(e) => handleInputChange(e, "quantity")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Material"
              value={product.product_information.material}
              onChange={(e) => handleInputChange(e, "material")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Size"
              value={product.product_information.size}
              onChange={(e) => handleInputChange(e, "size")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Additional Info"
              value={product.product_information.additional_info}
              onChange={(e) => handleInputChange(e, "additional_info")}
            />
          </div>
          <button type="button" onClick={handleAddField}>
            Auto Add Fields
          </button>

          {/* Input Six - Số lượng sản phẩm */}
          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              value={product.product_information.quantity}
              onChange={(e) => {
                setProduct({
                  ...product,
                  product_information: {
                    ...product.product_information,
                    quantity: parseInt(e.target.value, 10),
                  },
                });
              }}
              placeholder="Product Quantity"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Seven - Mô tả sản phẩm */}
          <div className="mb-3">
            <textarea
              value={product.description.features}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: {
                    ...product.description,
                    features: e.target.value,
                  },
                });
              }}
              name="features"
              placeholder="Product Features"
              rows="5"
              className="w-full px-2 py-1 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            ></textarea>
          </div>

          {/* Add Product Button */}
          <div className="mb-3">
            <button
              onClick={(e) => handleSubmit(e)}
              type="button"
              className="w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
