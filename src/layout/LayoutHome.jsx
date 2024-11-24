import React from "react";

const LayoutHome = ({ children }) => {
  return (
    <div className="max-w-[1260px] w-screen mx-auto  px-5 py-6 ">
      {children}
    </div>
  );
};

export default LayoutHome;
