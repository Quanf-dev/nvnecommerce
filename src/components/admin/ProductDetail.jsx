import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import deleteProductService from "../../services/deleteProductService";
import { AdvancedImage } from "@cloudinary/react";
import { getCloudinaryImage } from "../../utils/cloudinaryHelper";
import Pagination from "../pagination/Pagination";
import { RiDeleteBin2Line, RiEditLine } from "@remixicon/react";
import { Spinner, Input } from "@material-tailwind/react";

const ProductDetail = () => {
  const deleteProductFunction = deleteProductService();
  const { loading, getAllProduct } = useContext(myContext);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const itemsPerPage = 10;

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteProductFunction(id);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredProducts = getAllProduct
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      categoryFilter ? item.product_category === categoryFilter : true
    );

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredProducts.slice(offset, offset + itemsPerPage);

  return (
    <div className="flex flex-col items-center w-full px-10 py-2 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between w-full pl-3 mt-1 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Tất cả sản phẩm ({getAllProduct.length})
          </h3>
          <p className="text-slate-500">Xem và quản lý các sản phẩm của bạn</p>
        </div>
        <Link to="/addproduct">
          <button className="px-5 py-2 text-white border border-pink-100 rounded-lg bg-primary">
            Thêm sản phẩm
          </button>
        </Link>
      </div>

      <div className="flex justify-between w-1/2 gap-4 mb-4">
        <Input
          type="search"
          color="gray"
          label="Tìm kiếm sản phẩm"
          value={search}
          onChange={handleSearchChange}
          className="w-full max-h-9"
        />
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="w-full px-2 py-2 text-sm border rounded-md max-h-9 border-slate-300"
        >
          <option value="">Tất cả danh mục</option>
          {Array.from(
            new Set(getAllProduct.map((item) => item.product_category))
          ).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="relative flex flex-col w-full min-h-44">
        {loading && (
          <Spinner
            className="absolute w-12 h-12 left-1/2 top-1/2 "
            color="teal"
          />
        )}

        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr className="border-b border-slate-300 bg-slate-50">
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Sản phẩm
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Tên
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Giá
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Loại sản phẩm
              </th>
              <th className="p-4 text-sm font-normal leading-none text-slate-500">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item) => {
              const { id, name, new_price, product_category, images } = item;
              return (
                <tr key={id} className="hover:bg-slate-50">
                  <td className="p-4 py-5 border-b border-slate-200">
                    <AdvancedImage
                      className="object-cover w-16 h-16 rounded"
                      cldImg={getCloudinaryImage(images?.images_desc[0])}
                      alt="Sản phẩm"
                    />
                  </td>
                  <td className="p-4 py-5 border-b border-slate-200">
                    <p className="block text-sm font-semibold text-slate-800">
                      {name}
                    </p>
                  </td>
                  <td className="p-4 py-5 border-b border-slate-200">
                    <p className="text-sm text-slate-500">₹{new_price}</p>
                  </td>
                  <td className="p-4 py-5 border-b border-slate-200">
                    <p className="text-sm text-slate-500">{product_category}</p>
                  </td>
                  <td className="p-4 py-5 border-b border-slate-200">
                    <button
                      onClick={() => navigate(`/updateproduct/${id}`)}
                      className="text-black "
                    >
                      <RiEditLine />
                    </button>
                    <button
                      onClick={(e) => handleDelete(e, id)}
                      className="ml-4 text-red-500 hover:text-red-600"
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        active={currentPage}
        setActive={handlePageChange}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
      />
    </div>
  );
};

export default ProductDetail;
