import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import { fireDB } from "../firebase/FirebaseConfig";
import { useContext } from "react";
import myContext from "../context/myContext";
import validateForm from "../utils/validateForm";

const addProductOrderService = () => {
  const { formUserData, setFormUserData } = useContext(myContext);
  const { action } = formUserData;
  const { product } = useContext(myContext);
  const { cartItems } = useCart();
  const user = JSON.parse(localStorage.getItem("user"));
  const addProductOrderFunction = () => {
    // validation
    if (!validateForm(formUserData)) return;

    // Order Info
    const orderInfo = {
      ...(action !== "buynow" ? { cartItems } : { product }), // Chỉ thêm cartItems nếu action !== "buynow"
      formUserData,
      email: user?.email || "",
      userid: user?.uid || "",
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    try {
      const orderRef = collection(fireDB, "order");
      addDoc(orderRef, orderInfo);
      toast.success("Đã order thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return addProductOrderFunction;
};

export default addProductOrderService;
