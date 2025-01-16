import React from "react";

const OrdersView = () => {
  return (
    <table className="min-w-full bg-white border-b border-gray-200">
      <thead>
        <tr className="w-full border-b border-gray-200">
          <th className="px-6 py-4 text-base font-semibold text-left text-gray-900">
            ĐƠN HÀNG
          </th>
          <th className="px-6 py-4 text-base font-semibold text-left text-gray-900">
            NGÀY
          </th>
          <th className="px-6 py-4 text-base font-semibold text-left text-gray-900">
            TÌNH TRẠNG
          </th>
          <th className="px-6 py-4 text-base font-semibold text-left text-gray-900">
            TỔNG
          </th>
          <th className="px-6 py-4 text-base font-semibold text-left text-gray-900">
            CÁC THAO TÁC
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="w-full border-b border-gray-200">
          <td className="px-6 py-4 text-base text-gray-900">#418061</td>
          <td className="px-6 py-4 text-base text-gray-900">15/01/2025</td>
          <td className="px-6 py-4 text-base text-gray-900">Tạm giữ</td>
          <td className="px-6 py-4 text-base text-gray-900">
            <span className="font-bold text-primary">472,000 đ</span> cho 2 mục
          </td>
          <td className="px-6 py-4 text-base text-gray-900">
            <button className="px-4 py-2 text-white rounded-full bg-primary">
              XEM
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrdersView;
