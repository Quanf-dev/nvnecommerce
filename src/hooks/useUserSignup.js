import React, { useContext } from "react";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";

// Hook đăng ký người dùng
const useUserSignup = (auth, fireDB) => {
  // Sử dụng useContext để truy cập setLoading từ myContext
  const { setLoading } = useContext(myContext);

  // Hàm đăng ký người dùng
  const userSignupFunction = async (userSignup) => {
    // Kiểm tra xem các trường bắt buộc có trống không
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    // Đặt trạng thái loading là true
    setLoading(true);

    try {
      // Tạo tài khoản người dùng với email và mật khẩu
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // Tạo đối tượng người dùng
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Tạo tham chiếu đến collection "user" trong Firestore
      const userRefrence = collection(fireDB, "user");

      // Thêm thông tin người dùng vào Firestore
      addDoc(userRefrence, user);

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
    } finally {
      // Đảm bảo rằng trạng thái loading luôn được đặt lại là false
      setLoading(false);
    }
  };
  return { userSignupFunction };
};

export default useUserSignup;
