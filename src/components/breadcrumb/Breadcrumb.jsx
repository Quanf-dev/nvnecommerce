import React, { useContext } from "react";
import myContext from "../../context/myContext";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  const { nameCategory } = useContext(myContext);

  return (
    <>
      <Breadcrumbs className="p-0 mb-4 bg-white customBreadcrumbs">
        <Link to={"/"} className="opacity-60 ">
          Trang chủ
        </Link>
        <p className="font-bold">{nameCategory}</p>
      </Breadcrumbs>
    </>
  );
};

export default Breadcrumb;
