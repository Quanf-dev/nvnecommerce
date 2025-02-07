import { Breadcrumbs, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title }) => {
  console.log(title);
  return (
    <div className="w-screen bg-[#092143] text-center py-5 flex flex-col items-center text-white">
      <Typography variant="h1" className="font-bold ">
        {title}
      </Typography>
      <Breadcrumbs className="bg-[#092143]  ">
        <Link to="/" className="text-xs font-medium text-white uppercase">
          Trang chủ
        </Link>
        <Link to="#" className="text-xs font-medium text-white uppercase">
          {title}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default PageTitle;
