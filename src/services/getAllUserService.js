import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useContext } from "react";
import myContext from "../context/myContext";
import { fireDB } from "../firebase/FirebaseConfig";

const getAllUserService = () => {
  const { setLoading } = useContext(myContext);
  const getAllUserFunction = async (setGetAllUser) => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "users"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return getAllUserFunction;
};

export default getAllUserService;
