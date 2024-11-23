import React from "react";

const HeadCatogory = ({ text }) => {
  return (
    <h2 className="w-full text-[1.3rem] font-medium  text-textbgcolor-dark border-b-2 border-textBackground-light pb-2">
      <span className="pb-[11px] border-b-2 border-primary uppercase font-medium text-textBackground">
        {text}
      </span>
    </h2>
  );
};

export default HeadCatogory;
