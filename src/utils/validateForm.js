import toast from "react-hot-toast";

const validateForm = (formUserData) => {
  const { name, email, phone, address, district, ward, paymentMethod } =
    formUserData;

  if (!name) {
    toast.error("Vui lòng nhập họ tên!");
    return false;
  }
  if (!email) {
    toast.error("Vui lòng nhập email!");
    return false;
  }
  if (!phone) {
    toast.error("Vui lòng nhập số điện thoại!");
    return false;
  }
  if (!address) {
    toast.error("Vui lòng nhập địa chỉ!");
    return false;
  }
  if (!district) {
    toast.error("Vui lòng chọn Quận/Huyện!");
    return false;
  }
  if (!ward) {
    toast.error("Vui lòng chọn Xã/Phường!");
    return false;
  }
  if (!paymentMethod) {
    toast.error("Vui lòng chọn phương thức thanh toán!");
    return false;
  }

  return true; // Hợp lệ
};

export default validateForm;
