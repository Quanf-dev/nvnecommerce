import { Typography } from "@material-tailwind/react";
import { RiArrowRightLine } from "@remixicon/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

const CartCheckoutTrack = () => {
  const location = window.location.pathname;
  const { cartItems } = useCart();
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
        onClick={() => {
          if (cartItems.length > 0) {
            navigate("/checkout");
          } else {
            toast.error(
              "Giỏ hàng của bạn đang trống, vui lòng thêm sản phẩm vào giỏ hàng"
            );
          }
        }}
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
        onClick={() => {
          if (cartItems.length > 0) {
            navigate("/checkout/order-received");
          } else {
            toast.error(
              "Vui lòng điền thông tin và chọn sản phẩm để thanh toán"
            );
          }
        }}
      >
        Xác nhận thanh toán
      </Typography>
    </div>
  );
};

export default CartCheckoutTrack;
