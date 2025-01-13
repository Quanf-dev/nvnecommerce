import LayoutHome from "../../layout/LayoutHome";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Track from "../../components/track/Track";
import CartCheckoutTrack from "../../components/cartCheckoutTrack/CartCheckoutTrack";

const OrderReceived = () => {
  return (
    <>
      <Navbar />
      <CartCheckoutTrack />
      <LayoutHome>
        {" "}
        <div className="bg-white ">
          <Header />
          <OrderDetails />
          <PaymentMethod />
          <CustomerService />
          <BankTransferDetails />
          <OrderItems />
          <TotalAmount />
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
  <div className="p-4 mt-20 mb-4 border border-green-500 border-dashed">
    <h1 className="text-lg font-semibold text-center text-green-600">
      Cảm ơn bạn đã đặt hàng tại Noithatnvn.com
    </h1>
  </div>
);

const OrderDetails = () => (
  <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
    <div>
      <p>
        <span className="font-semibold">Mã đơn hàng:</span> 417856
      </p>
      <p>
        <span className="font-semibold">Ngày:</span> 13/01/2025
      </p>
    </div>
    <div>
      <p>
        <span className="font-semibold">Email:</span> th@gmail.comzxc
      </p>
      <p>
        <span className="font-semibold">Tổng cộng:</span> 50,000 đ
      </p>
    </div>
  </div>
);

const PaymentMethod = () => (
  <div className="mb-4">
    <p>
      <span className="font-semibold">Phương thức thanh toán:</span> Chuyển
      khoản ngân hàng
    </p>
  </div>
);

const CustomerService = () => (
  <div className="mb-4">
    <p>
      Nếu có vấn đề về ghi thông tin tài khoản và chuyển tiền, vui lòng liên hệ
      Dịch vụ Khách hàng để được hướng dẫn chi tiết qua số điện thoại Hotline:
      0937912255
    </p>
  </div>
);

const BankTransferDetails = () => (
  <div className="pb-4 mb-4 border-b border-gray-300">
    <h2 className="mb-2 text-lg font-semibold">
      THÔNG TIN CHUYỂN KHOẢN NGÂN HÀNG
    </h2>
    <p className="font-semibold">NGUYEN ANH TUAN:</p>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <p>
          <span className="font-semibold">Ngân hàng:</span> Ngân hàng Ngoại
          thương Việt nam (Vietcombank)
        </p>
      </div>
      <div>
        <p>
          <span className="font-semibold">Số tài khoản:</span> 9939762255
        </p>
      </div>
    </div>
  </div>
);

const OrderItems = () => (
  <div className="pb-4 mb-4 border-b border-gray-300">
    <h2 className="mb-2 text-lg font-semibold">CHI TIẾT ĐƠN HÀNG</h2>
    <h3 className="mb-2 font-semibold">SẢN PHẨM</h3>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <p>Tay nắm tủ nội thất bằng inox màu đen DJ029B - 160mm</p>
        <p>x 2</p>
        <p>
          <span className="font-semibold">Kích thước (RxSxC):</span> 160mm
        </p>
      </div>
      <div className="text-right">
        <p>50,000 đ</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <div>
        <p>
          <span className="font-semibold">Tổng số phụ:</span>
        </p>
      </div>
      <div className="text-right">
        <p>50,000 đ</p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <div>
        <p>
          <span className="font-semibold">Giao nhận hàng:</span> Phí vận chuyển
          sẽ báo sau.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
      <div>
        <p>
          <span className="font-semibold">Phương thức thanh toán:</span> Chuyển
          khoản ngân hàng
        </p>
      </div>
    </div>
  </div>
);

const TotalAmount = () => (
  <div className="pb-4 mb-4 border-b border-gray-300">
    <h2 className="mb-2 text-lg font-semibold">TỔNG CỘNG:</h2>
    <div className="text-right">
      <p className="text-lg font-semibold">50,000 đ</p>
    </div>
  </div>
);

const Addresses = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <h3 className="mb-2 font-semibold">ĐỊA CHỈ THANH TOÁN</h3>
      <p>7856813413</p>
      <p>bnm</p>
      <p>zxc</p>
      <p>Huyện Củ Chi</p>
      <p>Tp. Hồ Chí Minh</p>
      <p>th@gmail.comzxc</p>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">ĐỊA CHỈ GIAO HÀNG</h3>
      <p>7856813413</p>
      <p>bnm</p>
      <p>zxc</p>
      <p>Huyện Củ Chi</p>
      <p>Tp. Hồ Chí Minh</p>
    </div>
  </div>
);
