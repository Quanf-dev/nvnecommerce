import React, { useState } from "react";
import CollapsePolicy from "./CollapsePolicy";
import { Collapse } from "@material-tailwind/react";
import PropTypes from "prop-types";

const OrderSummary = ({ paymentMethod, handlePaymentMethodChange }) => {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [openSection, setOpenSection] = useState({
    "bank-transfer": false,
    "cash-on-delivery": false,
    "online-payment": false,
  });

  const handlePaymentChange = (event) => {
    const method = event.target.value;
    handlePaymentMethodChange(method);
    setOpenSection({
      "bank-transfer": method === "bank-transfer",
      "cash-on-delivery": method === "cash-on-delivery",
      "online-payment": method === "online-payment",
    });
  };

  return (
    <div className="relative p-6 mb-20 bg-gray-100 radial-gradient">
      <div className="pb-4 mt-2 mb-4 border-b border-gray-200">
        <div className="flex justify-between text-sm font-medium text-black">
          <span>SẢN PHẨM</span>
          <span>TẠM TÍNH</span>
        </div>
        <div className="flex justify-between mt-2 text-sm text-black">
          <span>Tay nắm tủ nội thất bằng inox màu đen DJ029B - 160mm x 2</span>
          <span>50,000 đ</span>
        </div>
      </div>
      <div className="pb-4 mb-4 border-b border-gray-200">
        <div className="flex justify-between text-sm text-black">
          <span>Tạm tính</span>
          <span>50,000 đ</span>
        </div>
        <div className="flex justify-between mt-2 text-sm text-black">
          <span>Giao hàng</span>
          <span>Phí vận chuyển sẽ báo sau.</span>
        </div>
      </div>
      <div className="flex justify-between mb-4 text-sm font-medium text-black">
        <span>Tổng</span>
        <span>50,000 đ</span>
      </div>

      {["bank-transfer", "cash-on-delivery", "online-payment"].map((method) => (
        <div key={method} className="mb-4">
          <input
            type="radio"
            id={method}
            name="payment-method"
            className="mr-2"
            value={method}
            checked={paymentMethod === method}
            onChange={handlePaymentChange}
          />
          <label htmlFor={method} className="text-sm text-black">
            {method === "bank-transfer"
              ? "Chuyển khoản ngân hàng"
              : method === "cash-on-delivery"
              ? "Trả tiền mặt khi nhận hàng"
              : "Thanh toán Online với thẻ ATM, Internet Banking, QRCODE"}
          </label>
          <Collapse open={openSection[method]}>
            <div className="p-4 mt-2 text-sm text-gray-700 bg-white">
              {method === "bank-transfer"
                ? "Thực hiện thanh toán vào ngay tài khoản cá nhân ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển."
                : method === "cash-on-delivery"
                ? "Bạn sẽ thanh toán khi nhận hàng."
                : "Thanh toán Online với thẻ ATM, Internet Banking, QRCODE. Bạn sẽ được chuyển tới Alepay.vn để tiến hành thanh toán."}
            </div>
          </Collapse>
        </div>
      ))}

      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Thông tin cá nhân của bạn chỉ được sử dụng cho xử lý đơn hàng, hỗ trợ
          chăm sóc khách hàng và mục đích khác được mô tả trong
          <span
            className="cursor-pointer text-primary"
            onClick={() => setOpenPolicy(!openPolicy)}
          >
            &nbsp;chính sách riêng tư
          </span>
          .
        </p>
        <CollapsePolicy open={openPolicy} />
      </div>

      <div className="mb-4">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms" className="text-sm text-black">
          Tôi đã đọc và đồng ý với
          <span
            className="cursor-pointer text-primary"
            onClick={() => setOpenPolicy(!openPolicy)}
          >
            &nbsp;điều khoản và điều kiện của website
          </span>
          .
        </label>
      </div>

      <button className="w-full py-2 font-medium text-white rounded-lg bg-primary">
        ĐẶT HÀNG
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  paymentMethod: PropTypes.string.isRequired,
  handlePaymentMethodChange: PropTypes.func.isRequired,
};

export default OrderSummary;
