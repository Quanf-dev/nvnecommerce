import React from "react";

const OrderSummary = ({ paymentMethod, handlePaymentMethodChange }) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-gray-50">
      <div className="pb-4 mb-4 border-b border-gray-200">
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
      <div className="mb-4">
        <input
          type="radio"
          id="bank-transfer"
          name="payment-method"
          className="mr-2"
          checked={paymentMethod === "bank-transfer"}
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="bank-transfer" className="text-sm text-black">
          Chuyển khoản ngân hàng
        </label>
        <p className="mt-2 text-xs text-gray-500">
          Thực hiện thanh toán vào ngay tài khoản cá nhân ngân hàng của chúng
          tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
          toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển.
        </p>
      </div>
      <div className="mb-4">
        <input
          type="radio"
          id="cash-on-delivery"
          name="payment-method"
          className="mr-2"
        />
        <label htmlFor="cash-on-delivery" className="text-sm text-black">
          Trả tiền mặt khi nhận hàng
        </label>
      </div>
      <div className="mb-4">
        <input
          type="radio"
          id="online-payment"
          name="payment-method"
          className="mr-2"
          checked={paymentMethod === "online-payment"}
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="online-payment" className="text-sm text-black">
          Thanh toán Online với thẻ ATM, Internet Banking, QRCODE
        </label>
      </div>
      <div className="mb-4">
        <p className="text-xs text-gray-500">
          Thông tin cá nhân của bạn chỉ được sử dụng cho xử lý đơn hàng, hỗ trợ
          cho chăm sóc khách hàng và mục đích khác mô tả trong{" "}
          <a href="#" className="text-yellow-600">
            chính sách riêng tư
          </a>
          .
        </p>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms" className="text-sm text-black">
          Tôi đã đọc và đồng ý với{" "}
          <a href="#" className="text-yellow-600">
            điều khoản và điều kiện của website
          </a>
        </label>
      </div>
      <button className="w-full py-2 font-medium text-white bg-yellow-600 rounded-lg">
        ĐẶT HÀNG
      </button>
    </div>
  );
};

export default OrderSummary;
