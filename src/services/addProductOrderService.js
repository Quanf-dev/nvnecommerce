import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import { fireDB } from "../firebase/FirebaseConfig";

const addProductOrderService = () => {
  const { cartItems } = useCart();
  const user = JSON.parse(localStorage.getItem("user"));
  const addProductOrderFunction = (addressInfo, setAddressInfo) => {
    // validation
    if (
      addressInfo.name === "" ||
      addressInfo.address === "" ||
      addressInfo.pincode === "" ||
      addressInfo.mobileNumber === ""
    ) {
      return toast.error("All Fields are required");
    }

    // Order Info
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
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
      setAddressInfo({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
      });
      toast.success("Order Placed Successfull");
    } catch (error) {
      console.log(error);
    }
  };
  return addProductOrderFunction;
};

export default addProductOrderService;
