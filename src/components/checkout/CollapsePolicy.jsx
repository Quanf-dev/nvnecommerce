import { Collapse } from "@material-tailwind/react";
import React from "react";
import PropTypes from "prop-types";

const CollapsePolicy = ({ open = false }) => {
  return (
    <Collapse open={open}>
      <div className="p-6 overflow-y-scroll transition-all duration-300 ease-in-out border border-gray-300 rounded-lg bg-gray-50 h-96">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-800">
          Chính Sách Bảo Mật
        </h2>
        <p className="mb-4 text-gray-700">
          Noithatnvn.com cam kết sẽ bảo mật những thông tin riêng tư của khách
          hàng và tuân thủ quy định pháp luật liên quan đến việc bảo mật thông
          tin. Khách hàng vui lòng đọc bản “Chính sách bảo mật” này để hiểu hơn
          những cam kết mà Noithatnvn.com thực hiện, nhằm tôn trọng và bảo vệ
          quyền lợi của người truy cập.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800">
          Sự Chấp Thuận
        </h3>
        <p className="mb-4 text-gray-700">
          Khi bạn đăng ký, đăng nhập hoặc sử dụng website Noithatnvn.com và cung
          cấp thông tin, bạn đã đồng ý cho chúng tôi sử dụng thông tin này.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800">
          Mục Đích Thu Thập
        </h3>
        <ul className="mb-4 space-y-2 text-gray-700 list-disc list-inside">
          <li>Cung cấp dịch vụ và xử lý đơn hàng.</li>
          <li>Cập nhật thông tin sản phẩm và sự kiện.</li>
          <li>Duy trì tài khoản.</li>
          <li>Chăm sóc khách hàng.</li>
          <li>Cá nhân hóa trải nghiệm.</li>
          <li>Đảm bảo an ninh và chống gian lận.</li>
        </ul>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800">
          Phạm Vi Thu Thập Thông Tin
        </h3>
        <p className="mb-4 text-gray-700">
          Chúng tôi thu thập thông tin từ bạn khi bạn cung cấp trực tiếp hoặc từ
          các nguồn hợp pháp.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800">
          Cam Kết Bảo Mật Thông Tin Cá Nhân
        </h3>
        <p className="mb-4 text-gray-700">
          Thông tin cá nhân của khách hàng được Noithatnvn.com bảo mật tuyệt đối
          theo chính sách bảo vệ thông tin của Noithatnvn.com.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-800">
          Liên Hệ
        </h3>
        <p className="text-gray-700">
          Công Ty TNHH Đầu tư Thương Mại Noithatnvn
          <br /> Địa chỉ cs1: Số 41 Gò Dư, Liên Chiểu, Đà Nẵng
          <br /> Địa chỉ cs2: Số 194 Lý Nhân Tông, Hương Xuân, Huế
          <br /> Hotline: 0937 91 22 55
          <br /> Email: contact@Noithatnvn.com
        </p>
      </div>
    </Collapse>
  );
};

export default CollapsePolicy;
