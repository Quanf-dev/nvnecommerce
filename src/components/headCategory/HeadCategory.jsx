import { RiArrowRightSLine } from "@remixicon/react";
import React from "react";

const HeadCategory = ({ text, showMore }) => {
  return (
    <h2 className="w-full text-[1.3rem] font-medium  text-textbgcolor-dark border-b-2 border-textBackground-light pb-2 relative">
      <span className="pb-[11px] border-b-2 border-primary uppercase font-medium text-textBackground">
        {text}
      </span>
      <a
        className={`${
          showMore ? "hidden" : ""
        } absolute top-3 -right-2 flex items-center text-[1rem] text-textBackground font-normal transform duration-75 cursor-pointer ease-linear hover:text-primary`}
      >
        Xem thêm{" "}
        <span>
          <RiArrowRightSLine />
        </span>
      </a>
    </h2>
  );
};

export default HeadCategory;
