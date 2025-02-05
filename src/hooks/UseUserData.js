import { useState } from "react";

const UseUserData = () => {
  const [formUserData, setFormUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    orderNotes: "",
    paymentMethod: "", // Thêm paymentMethod vào đây
  });

  return [formUserData, setFormUserData];
};

export default UseUserData;
