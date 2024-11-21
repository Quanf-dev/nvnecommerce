import React, { useContext } from "react";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// Hook đăng ký người dùng
const useUserSignup = (auth, fireDB) => {
  // Sử dụng useContext để truy cập setLoading từ myContext
  const { setLoading } = useContext(myContext);
  const navigate = useNavigate();

  // Hàm đăng ký người dùng
  const userSignupFunction = async (userSignup, setUserSignup) => {
    // Kiểm tra xem các trường bắt buộc có trống không
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return toast.error("All Fields are required");
    }

    // Đặt trạng thái loading là true
    setLoading(true);

    try {
      // Tạo tài khoản người dùng với email và mật khẩu
      const newUserCredential = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );
      const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };
      if (!validateEmail(userSignup.user.email)) {
        console.error("Invalid email address");
        return;
      }
      // Tạo đối tượng người dùng
      const user = {
        name: userSignup.name,
        email: newUserCredential.user.email,
        uid: newUserCredential.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Tạo tham chiếu đến collection "user" trong Firestore
      const userRefrence = collection(fireDB, "users");
      console.log(user);
      // Thêm thông tin người dùng vào Firestore
      await addDoc(userRefrence, user);

      // Đặt lại trạng thái đăng ký người dùng
      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      // Hiển thị thông báo đăng ký thành công
      toast.success("Signup Successfully");

      // Đặt trạng thái loading là false
      setLoading(false);

      // Điều hướng đến trang đăng nhập
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Password is greater than 10 characters");
    } finally {
      // Đảm bảo rằng trạng thái loading luôn được đặt lại là false
      setLoading(false);
    }
  };
  return userSignupFunction;
};

export default useUserSignup;
