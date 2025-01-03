import { useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import getSingleProductService from "../../services/getSingleProductService";
import updateProductService from "../../services/updateProductService";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
];

const UpdateProductPage = () => {
  const { id } = useParams();
  const getSingleProductFunction = getSingleProductService();
  const updateProductFunction = updateProductService();
  const { loading } = useContext(myContext);

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  useEffect(() => {
    getSingleProductFunction(setProduct, id);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProductFunction(product, id);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="px-8 py-6 border border-pink-100 shadow-md login_Form bg-pink-50 rounded-xl">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-center text-pink-500 ">
              Update Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="px-2 py-2 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
            />
          </div>

          {/* Input Four  */}
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
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className="w-full px-2 py-1 text-pink-300 placeholder-pink-300 border border-pink-200 rounded-md outline-none bg-pink-50"
            ></textarea>
          </div>

          {/* Update Product Button  */}
          <div className="mb-3">
            <button
              onClick={(e) => handleUpdate(e)}
              type="button"
              className="w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 "
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductPage;
