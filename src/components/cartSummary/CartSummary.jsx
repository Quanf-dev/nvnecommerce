import BuyNowModalDialog from "../../components/Dialog/buyNowDialog/BuyNowModalDialog";

const CartSummary = ({ cartItemTotal, cartTotal }) => (
  <section
    aria-labelledby="summary-heading"
    className="mt-16 bg-white rounded-md shadow-md lg:col-span-4 lg:mt-0 lg:p-0"
  >
    <h2 className="px-4 py-3 text-lg font-medium text-gray-900 border-b border-gray-200 sm:p-4">
      Chi tiết giá
    </h2>
    <div>
      <dl className="px-4 py-4 space-y-1">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-800">
            Giá ({cartItemTotal} sản phẩm)
          </dt>
          <dd className="text-sm font-medium text-gray-900">₹ {cartTotal}</dd>
        </div>
        <div className="flex items-center justify-between py-4">
          <dt className="text-sm text-gray-800">Phí vận chuyển</dt>
          <dd className="text-sm font-medium text-green-700">Miễn phí</dd>
        </div>
        <div className="flex items-center justify-between py-4 border-dashed border-y">
          <dt className="text-base font-medium text-gray-900">Tổng số tiền</dt>
          <dd className="text-base font-medium text-gray-900">₹ {cartTotal}</dd>
        </div>
      </dl>
      <div className="px-4 pb-4 font-medium text-green-700">
        <BuyNowModalDialog />
      </div>
    </div>
  </section>
);

export default CartSummary;
