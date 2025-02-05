import React, { useContext } from "react";
import myContext from "../../context/myContext";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
  const { nameCategory } = useContext(myContext);
  const { product } = useContext(myContext);
  const navigate = useNavigate();

  console.log(product.category);

  return (
    <>
      <Breadcrumbs className="p-0 mb-4 bg-white customBreadcrumbs">
        <Link to={"/"} className="opacity-60 ">
          Trang chủ
        </Link>
        <p
          onClick={() =>
            navigate(
              `/category/${
                nameCategory === "" ? product.product_category : nameCategory
              }`
            )
          }
          className="font-bold"
        >
          {nameCategory === "" ? product.product_category : nameCategory}{" "}
        </p>
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
