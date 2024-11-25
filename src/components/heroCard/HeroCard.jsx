import React from "react";

const HeroCard = () => {
  return (
    <div
      href="#"
      className="block p-4 rounded-lg shadow-sm shadow-indigo-100 cursor-text"
    >
      <img
        alt=""
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="object-cover w-full h-56 rounded-md"
      />
      <ul className="flex flex-col gap-5 mt-4 text-[#292929] font-normal text-[1rem]">
        <li>
          Chuyên Sản Xuất – Phân Phối Ghế Gaming Giá Buôn, Sỉ Số Lượng Lớn
        </li>
        <li>Fast and Free Ship ghế văn phòng</li>
        <li>Rinh combo gaming – nhận quà tặng linh đình</li>
        <li>Chuyên bán bàn ghế văn phòng chất lượng, giá cả cạnh tranh</li>
      </ul>
    </div>
  );
};

export default HeroCard;
