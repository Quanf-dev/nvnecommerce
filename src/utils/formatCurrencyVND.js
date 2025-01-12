const formatCurrencyVND = (amountString) => {
  const amount = parseInt(amountString + "000");
  if (isNaN(amount)) return "Giá trị không hợp lệ";
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};
export default formatCurrencyVND;
