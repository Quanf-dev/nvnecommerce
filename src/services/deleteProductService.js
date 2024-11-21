import React, { useContext } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../firebase/FirebaseConfig";
import myContext from "../context/myContext";

const deleteProductService = () => {
  const { setLoading } = useContext(myContext);
  const deleteProductFunction = async (id) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Deleted successfully");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return deleteProductFunction;
};

export default deleteProductService;
