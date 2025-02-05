import { Typography } from "@material-tailwind/react";
import { RiArrowRightLine } from "@remixicon/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartCheckoutTrack = () => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-5 justify-center w-full py-7 bg-[#092143] text-gray-400 uppercase ">
      <Typography
        variant="h4"
        className={`cursor-pointer  ${
          location === "/cart" ? "text-white border-b-2 border-primary" : ""
        }`}
        onClick={() => navigate("/cart")}
      >
        Giỏ hàng
      </Typography>
      <RiArrowRightLine size={23} />
      <Typography
        variant="h4"
        className={`cursor-pointer ${
          location === "/checkout"
            ? "text-white border-b-2 border-primary "
            : ""
        }`}
        onClick={() => navigate("/checkout")}
      >
        Thanh toán
      </Typography>
      <RiArrowRightLine size={23} />
      <Typography
        variant="h4"
        className={`cursor-pointer ${
          location.includes("/checkout/")
            ? "text-white border-b-2 border-primary"
            : ""
        }`}
        onClick={() => navigate("/checkout/order-received")}
      >
        Xác nhận thanh toán
      </Typography>
    </div>
  );
};

export default CartCheckoutTrack;
