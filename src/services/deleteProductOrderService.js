import React, { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../firebase/FirebaseConfig";
import myContext from "../context/myContext";

const deleteProductOrderService = () => {
  const { setLoading } = useContext(myContext);
  const deleteProductOrderFunction = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "order", id));
      toast.success("Product Deleted successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return deleteProductOrderFunction;
};

export default deleteProductOrderService;
