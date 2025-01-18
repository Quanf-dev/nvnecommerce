import React from "react";

const ListSeoProduct = ({ list }) => {
  return (
    <div className="flex gap-2 mt-4 overflow-scroll scrollbar-none">
      {list.map((item, index) => (
        <li
          className="w-fit whitespace-nowrap  cursor-pointer px-2 py-1 list-none bg-gray-300 rounded-md text-[#333333] text-[0.9rem] hover:bg-primary hover:text-white transform duration-200 ease-linear"
          key={index}
        >
          {item}
        </li>
      ))}
    </div>
  );
};

export default ListSeoProduct;
