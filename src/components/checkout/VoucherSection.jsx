import React from "react";

const VoucherSection = ({ voucher, setVoucher, applyVoucher }) => {
  return (
    <div className="mb-4 text-Left">
      <a href="#" className="text-sm text-gray-600">
        Bạn có mã ưu đãi?{" "}
        <span className="text-primary" onClick={applyVoucher}>
          Ấn vào đây để nhập mã
        </span>
      </a>
    </div>
  );
};

export default VoucherSection;
