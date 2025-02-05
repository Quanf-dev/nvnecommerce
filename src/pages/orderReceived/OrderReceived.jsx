import React, { useContext } from "react";
import myContext from "../../context/myContext";
import Announcement from "../../components/announcement/Announcement ";
import { Navbar } from "@material-tailwind/react";
import LayoutHome from "../../layout/LayoutHome";
import Track from "../../components/track/Track";
import CartCheckoutTrack from "../../components/cartCheckoutTrack/CartCheckoutTrack";
import Footer from "../../components/footer/Footer";

const OrderReceived = () => {
  const { formUserData } = useContext(myContext);
  console.log(formUserData.paymentMethod);
  return (
    <>
      <Announcement />
      <Navbar />
      <CartCheckoutTrack />
      <LayoutHome>
        <div className="bg-white max-w-[800px] mx-auto ">
          <Header />
          <OrderDetails />
          <CustomerService />
          <OrderItems />
          <Addresses />
        </div>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

export default OrderReceived;

const Header = () => (
  <div className="p-6 mt-20 mb-4 border border-[#7A9C59] border-dashed">
    <h1 className="text-3xl font-semibold text-center text-[#7A9C59]">
      Cảm ơn bạn đã đặt hàng tại Noithatnvn.com
    </h1>
  </div>
);

const OrderDetails = () => {
  const { formUserData } = useContext(myContext);

  return (
    <ul className="flex justify-center h-20 gap-6 my-10 text-sm">
      <li className="flex flex-col items-center gap-3 text-gray-600 ">
        Mã đơn hàng: <strong className="text-black">417856</strong>
      </li>
      <li className="flex flex-col gap-3 items-center border-l-[1px]  pl-6 text-gray-600 ">
        Ngày: <strong className="text-black">13/01/2025</strong>
      </li>
      <li className="flex flex-col gap-3 items-center border-l-[1px] pl-6 text-gray-600 ">
        Email: <strong className="text-black">{formUserData.email}</strong>
      </li>
      <li className="flex flex-col gap-3 items-center border-l-[1px]  pl-6 text-gray-600 ">
        Tổng cộng: <strong className="text-black">50,000 đ</strong>
      </li>
      <li className="flex flex-col gap-3 items-center border-l-[1px]  pl-6 text-gray-600 ">
        Phương thức thanh toán:{" "}
        <strong className="text-black">Chuyển khoản ngân hàng</strong>
      </li>
    </ul>
  );
};

const CustomerService = () => (
  <div className="mb-4">
    <p className="text-sm text-gray-600">
      Nếu có vấn đề về ghi thông tin tài khoản và chuyển tiền, vui lòng liên hệ
      Dịch vụ Khách hàng để được hướng dẫn chi tiết qua số điện thoại Hotline:
      0937912255
    </p>
  </div>
);

const BankTransferDetails = () => {
  const { formUserData } = useContext(myContext);

  return (
    <div className="pb-4 mt-10 mb-4 border-b border-gray-300">
      <h2 className="mb-2 text-2xl font-semibold">
        THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG
      </h2>
      <p className="text-xl font-semibold text-gray-500">NGUYEN VAN NHAN:</p>
      <div className="grid grid-cols-1 gap-4 mt-8 text-sm md:grid-cols-2">
        <div className="border-r-[1px] ">
          <p className="flex flex-col items-center gap-3 text-gray-600 ">
            Ngân hàng:{" "}
            <strong className="text-black">
              Ngân hàng Ngoại thương Việt Nam (Vietcombank)
            </strong>
          </p>
        </div>
        <div>
          <p className="flex flex-col items-center gap-3 text-gray-600 ">
            Số tài khoản: <strong className="text-black">??????????</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

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

const Addresses = () => {
  const { formUserData } = useContext(myContext);

  return (
    <div className="grid grid-cols-1 gap-4 mb-20 md:grid-cols-2">
      <div className="text-gray-600 ">
        <h3 className="mb-4 text-xl font-semibold text-black">
          ĐỊA CHỈ THANH TOÁN
        </h3>
        <p>{formUserData.address}</p>
        <p>{formUserData.ward}</p>
        <p>{formUserData.district}</p>
        <p>{formUserData.city}</p>
        <p>{formUserData.email}</p>
      </div>
      <div className="text-gray-600 ">
        <h3 className="mb-4 text-xl font-semibold text-black">
          ĐỊA CHỈ GIAO HÀNG
        </h3>
        <p>{formUserData.address}</p>
        <p>{formUserData.ward}</p>
        <p>{formUserData.district}</p>
        <p>{formUserData.city}</p>
      </div>
    </div>
  );
};
