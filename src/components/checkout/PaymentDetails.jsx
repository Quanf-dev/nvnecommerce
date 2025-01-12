import React from "react";

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
        <div>
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
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-black"
          >
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-black"
          >
            Tỉnh/Thành phố <span className="text-red-500">*</span>
          </label>
          <select
            id="city"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option>Tp. Hồ Chí Minh</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="district"
            className="block text-sm font-medium text-black"
          >
            Quận huyện <span className="text-red-500">*</span>
          </label>
          <select
            id="district"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option>Huyện Cần Giờ</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="ward"
            className="block text-sm font-medium text-black"
          >
            Xã/Phường/Thị trấn (tùy chọn)
          </label>
          <input
            type="text"
            id="ward"
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
            value={ward}
            onChange={(e) => setWard(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4">
        <input
          type="checkbox"
          id="different-address"
          className="mr-2"
          checked={differentAddress}
          onChange={() => setDifferentAddress(!differentAddress)}
        />
        <label htmlFor="different-address" className="text-sm text-black">
          Giao hàng tới địa chỉ khác?
        </label>
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
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm"
          rows="4"
          value={orderNotes}
          onChange={(e) => setOrderNotes(e.target.value)}
        />
      </div>
    </form>
  );
};

export default PaymentDetails;
