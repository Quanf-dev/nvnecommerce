import { useState } from "react";

const UseUserData = () => {
  const [formUserData, setFormUserData] = useState({
    action: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    ward: "",
    orderNotes: "",
    paymentMethod: "", // Thêm paymentMethod vào đây
  });

  return [formUserData, setFormUserData];
};

export default UseUserData;
