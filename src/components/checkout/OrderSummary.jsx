import React, { useContext, useState, useEffect } from "react";
import CollapsePolicy from "./CollapsePolicy";
import { Collapse } from "@material-tailwind/react";
import useCart from "../../hooks/useCart";
import myContext from "../../context/myContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import validateForm from "../../utils/validateForm";
import addProductOrderService from "../../services/addProductOrderService";
import formatCurrencyVND from "../../utils/formatCurrencyVND";

const OrderSummary = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const [openPolicy, setOpenPolicy] = useState(false);
  const [paymentChoose, setPaymentChoose] = useState(null);
  const [openSection, setOpenSection] = useState({
    "bank-transfer": false,
    "cash-on-delivery": false,
    "online-payment": false,
  });
  const addProductOrderFunction = addProductOrderService();
  const { formUserData, setFormUserData } = useContext(myContext);
  const { cartItems } = useCart();
  const { product } = useContext(myContext);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  // Cập nhật paymentChoose khi openSection thay đổi
  useEffect(() => {
    const activeMethod = getActiveSection(openSection);
    if (activeMethod) {
      setPaymentChoose(activeMethod);
      setFormUserData({
        ...formUserData,
        paymentMethod: activeMethod, // Cập nhật paymentMethod trong formUserData
      });
    }
  }, [openSection]);

  const handlePaymentChange = (event) => {
    const method = event.target.value;
    setOpenSection({
      "bank-transfer": method === "bank-transfer",
      "cash-on-delivery": method === "cash-on-delivery",
      "online-payment": method === "online-payment",
    });
  };

  const getActiveSection = (sections) => {
    for (const section in sections) {
      if (sections[section] === true) {
        return section;
      }
    }
    return null;
  };
  useEffect(() => {
    setFormUserData((prev) => ({
      ...prev,
      action: action,
    }));
  }, [action]);

  const handleOrder = () => {
    if (!validateForm(formUserData)) {
      return;
    }
    if (!isChecked) {
      toast.error("Bạn cần đồng ý với điều khoản và điều kiện!");
      return;
    }
    console.log(action);

    addProductOrderFunction();
    navigate("order-received");
  };
  const itemsToCalculate = action === "buynow" ? [product] : cartItems;

  const cartTotal = itemsToCalculate.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  return (
    <div className="relative p-6 mb-20 bg-gray-100 radial-gradient">
      <div className="flex flex-col gap-2 p-5 pb-4 mt-2 mb-4 bg-white border-b border-gray-200">
        <div className="flex justify-between text-sm font-medium text-black">
          <span>SẢN PHẨM</span>
          <span>TẠM TÍNH</span>
        </div>
        {action !== "buynow" ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between py-2 mt-2 text-sm text-black border-t-2"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{item.new_price} đ</span>
            </div>
          ))
        ) : (
          <div className="flex justify-between py-2 mt-2 text-sm text-black border-t-2">
            <span>
              {product.name} x {product.quantity}
            </span>
            <span>{product.new_price} đ</span>
          </div>
        )}
        <div className="pb-4 mb-4 border-b border-gray-200">
          <div className="flex justify-between py-2 text-sm text-black border-t-2">
            <span className="font-medium">Tạm tính</span>
            <span>{formatCurrencyVND(cartTotal)}</span>
          </div>
          <div className="flex justify-between py-2 mt-2 text-sm text-black border-t-2">
            <span className="font-medium">Giao hàng</span>
            <span>Phí vận chuyển sẽ báo sau.</span>
          </div>
        </div>
        <div className="flex justify-between mb-4 text-sm font-medium text-black">
          <span>Tổng</span>
          <span> {formatCurrencyVND(cartTotal)}</span>
        </div>
      </div>

      {["bank-transfer", "cash-on-delivery", "online-payment"].map((method) => (
        <div key={method} className="mb-4">
          <input
            type="radio"
            id={method}
            name="payment-method"
            className="mr-2"
            value={method}
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
        <input
          type="checkbox"
          id="terms"
          className="mr-2"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
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

      <button
        onClick={handleOrder}
        className="w-full py-2 font-medium text-white rounded-lg bg-primary"
      >
        ĐẶT HÀNG
      </button>
    </div>
  );
};

export default OrderSummary;
