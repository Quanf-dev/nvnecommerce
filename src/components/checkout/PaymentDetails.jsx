import React, { useContext } from "react";
import Address from "../address/Address";
import myContext from "../../context/myContext";

const PaymentDetails = () => {
  // Lấy formUserData từ context
  const { formUserData, setFormUserData } = useContext(myContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUserData((prev) => ({
      ...prev,
      [name]: value, // Cập nhật trường thay đổi
    }));
  };
  console.log(formUserData);

  return (
    <form>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="col-span-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-black"
          >
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name" // Thêm name để xác định trường
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={formUserData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-black"
          >
            Địa chỉ email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={formUserData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-black"
          >
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            minLength={11}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={formUserData.phone}
            onChange={handleChange}
          />
        </div>
        <Address />
      </div>
      <div className="mt-4">
        <label
          htmlFor="order-notes"
          className="block text-sm font-medium text-black"
        >
          Ghi chú đơn hàng (tùy chọn)
        </label>
        <textarea
          id="order-notes"
          name="orderNotes"
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm resize-none"
          rows="4"
          value={formUserData.orderNotes}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default PaymentDetails;
