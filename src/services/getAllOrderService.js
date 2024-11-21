import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useContext } from "react";
import myContext from "../context/myContext";
import { fireDB } from "../firebase/FirebaseConfig";

const getAllOrderService = () => {
  const { setLoading } = useContext(myContext);
  const getAllOrderFunction = async (setGetAllOrder) => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return getAllOrderFunction;
};

export default getAllOrderService;
