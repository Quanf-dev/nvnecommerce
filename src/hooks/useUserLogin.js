import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useUserLogin = (auth, fireDB) => {
  const navigate = useNavigate();
  const { setLoading } = useContext(myContext);

  const userLoginFunction = async (userLogin, setUserLogin) => {
    if (userLogin.email === "" || userLogin.password === "") {
      return toast.error("All Fields are required");
    }
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      try {
        const selectUserQuery = query(
          collection(fireDB, "users"),
          where("uid", "==", userCredential?.user?.uid)
        );
        try {
          const unsubscribe = onSnapshot(selectUserQuery, (querySnapshot) => {
            let user;
            querySnapshot.forEach((doc) => (user = doc.data()));
            localStorage.setItem("user", JSON.stringify(user));

            setUserLogin({
              email: "",
              password: "",
            });
            toast.success("Login Successfully");
            setLoading(false);
            if (user.role === "user") {
              navigate("/user-dashboard");
            } else {
              navigate("/admin-dashboard");
            }
          });
          return () => unsubscribe;
        } catch (error) {
          console.log(error);
          toast.error("Invaild Find");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Invaild Password");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Account Not Found");
    }
  };
  return userLoginFunction;
};

export default useUserLogin;
