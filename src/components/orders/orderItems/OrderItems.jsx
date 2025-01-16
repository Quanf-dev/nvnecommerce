const OrderItems = () => (
  <div className="pb-4 mb-4 ">
    <h2 className="pb-2 mb-4 text-xl font-bold text-gray-800 uppercase ">
      Chi tiết đơn hàng
    </h2>
    <div className="p-6 rounded-lg">
      <div className="flex justify-between pb-2 mb-4 border-b border-gray-300">
        <h3 className="text-lg font-medium text-gray-700">Sản phẩm</h3>
        <h3 className="text-lg font-medium text-gray-700">Tổng</h3>
      </div>

      <div className="grid grid-cols-1 gap-6 pb-4 border-b border-gray-300 md:grid-cols-2">
        <div className="text-sm text-gray-700">
          <p className="font-medium">
            Tay nắm tủ nội thất bằng inox màu đen DJ029B - 160mm
          </p>
          <p className="text-gray-500">x 2</p>
          <p className="mt-1">
            <span className="font-semibold">Kích thước (RxSxC):</span> 160mm
          </p>
        </div>
        <div className="text-sm font-bold text-right text-primary">
          50,000 đ
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-4 text-sm border-b border-gray-300 md:grid-cols-2">
        <div className="font-semibold text-gray-700 ">Tổng số phụ:</div>
        <div className="font-bold text-right text-primary">50,000 đ</div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-4 border-b border-gray-300 md:grid-cols-2">
        <div className="font-semibold text-gray-700 ">Giao nhận hàng:</div>
        <div className="text-sm text-right">Phí vận chuyển sẽ báo sau.</div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-4 border-b border-gray-300 md:grid-cols-2">
        <div className="font-semibold text-gray-700 ">
          Phương thức thanh toán:{" "}
        </div>
        <div className="text-sm text-right">Chuyển khoản ngân hàng</div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-4 border-b border-gray-300 md:grid-cols-2">
        <div className="text-xl font-bold ">Tổng cộng: </div>
        <div className="text-lg font-bold text-right text-primary">
          50,000 ₫
        </div>
      </div>
    </div>
  </div>
);

export default OrderItems;
