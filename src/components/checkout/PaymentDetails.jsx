import React from "react";
import Address from "../address/Address";

const PaymentDetails = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  city,
  setCity,
  district,
  setDistrict,
  ward,
  setWard,
  differentAddress,
  setDifferentAddress,
  orderNotes,
  setOrderNotes,
}) => {
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
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            type="text"
            id="phone"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm resize-none"
          rows="4"
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
        />
      </div>
    </form>
  );
};

export default PaymentDetails;
