import React, { useState } from "react";
import LayoutHome from "../../layout/LayoutHome";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Track from "../../components/track/Track";
import CartCheckoutTrack from "../../components/cartCheckoutTrack/CartCheckoutTrack";
import PaymentDetails from "../../components/checkout/PaymentDetails";
import OrderSummary from "../../components/checkout/OrderSummary";
import VoucherSection from "../../components/checkout/VoucherSection";
import Announcement from "../../components/announcement/Announcement ";

const CheckoutPage = () => {
  const [voucher, setVoucher] = useState("");

  const handleVoucherChange = (e) => setVoucher(e.target.value);
  const applyVoucher = () => alert(`Áp dụng mã: ${voucher}`);

  return (
    <>
      <Announcement />
      <Navbar />
      <CartCheckoutTrack />
      <LayoutHome>
        <VoucherSection />
        <div className="flex flex-col bg-white lg:flex-row">
          <div className="w-full pr-0 lg:w-2/4 lg:pr-8">
            <h2 className="mb-4 text-xl font-bold">THÔNG TIN THANH TOÁN</h2>
            <PaymentDetails />
          </div>
          <div className="w-full mt-8 lg:w-2/4 lg:mt-0">
            <h2 className="mb-4 text-xl font-bold">ĐƠN HÀNG CỦA BẠN</h2>
            <OrderSummary />
          </div>
        </div>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default CheckoutPage;
