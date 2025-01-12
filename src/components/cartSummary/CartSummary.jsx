import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import formatCurrencyVND from "../../utils/formatCurrencyVND";

const CartSummary = ({ cartItemTotal, cartTotal }) => {
  const [voucher, setVoucher] = useState("");

  const handleVoucherChange = (e) => setVoucher(e.target.value);

  const applyVoucher = () => alert(`Áp dụng mã: ${voucher}`);

  return (
    <section
      aria-labelledby="summary-heading"
      className="p-6 bg-white border-2 border-gray-300 rounded-lg lg:col-span-4 lg:mt-0"
    >
      <h2 className="pb-4 mb-4 text-xl font-semibold text-gray-900 border-b border-gray-200">
        Chi tiết giá
      </h2>
      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm text-gray-800">
            Giá ({cartItemTotal} sản phẩm)
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            {formatCurrencyVND(cartTotal)}
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm text-gray-800">Phí vận chuyển</dt>
          <dd className="text-sm font-medium text-green-700">Miễn phí</dd>
        </div>
        <div className="flex gap-2">
          <Input
            color="gray"
            label="Nhập mã voucher"
            value={voucher}
            onChange={handleVoucherChange}
          />
          <Button
            onClick={applyVoucher}
            className="inline w-48 shadow-none bg-primary hover:bg-primary-light hover:shadow-none"
          >
            Áp dụng
          </Button>
        </div>
        <div className="flex justify-between pt-3 border-t border-gray-300">
          <dt className="text-lg font-medium text-gray-900">Tổng số tiền</dt>
          <dd className="text-lg font-medium text-gray-900">
            {formatCurrencyVND(cartTotal)}
          </dd>
        </div>
      </dl>
      <div className="mt-6 space-y-4">
        <Button className="w-full shadow-none bg-primary hover:bg-primary-light hover:shadow-none">
          Tiến hành thanh toán
        </Button>
      </div>
    </section>
  );
};

export default CartSummary;
