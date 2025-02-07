import React, { useContext } from "react";
import myContext from "../../context/myContext";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { convertToSlugHelper } from "../../utils/convertToSlugHelper";

const Breadcrumb = () => {
  const { nameCategory, product } = useContext(myContext);
  const navigate = useNavigate();

  const categoryName =
    nameCategory && nameCategory.trim() !== ""
      ? nameCategory
      : product?.product_category && product.product_category.trim() !== ""
      ? product.product_category
      : "product";

  return (
    <Breadcrumbs className="p-0 mb-4 bg-white customBreadcrumbs">
      <Link to="/" className="opacity-60">
        Trang chủ
      </Link>
      <p
        onClick={() =>
          navigate(
            `/${
              categoryName === "allproduct" ? "" : "category/"
            }${convertToSlugHelper(categoryName)}`
          )
        }
        className="font-bold cursor-pointer"
      >
        {categoryName === "product" ? "Sản phẩm" : categoryName}
      </p>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
