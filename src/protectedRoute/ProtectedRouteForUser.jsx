import { Navigate } from "react-router";
import AuthPage from "../pages/registration/AuthPage";

export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Nếu chưa đăng nhập, hiển thị trang đăng nhập
    return <AuthPage />;
  }

  if (user.role === "user") {
    // Nếu đã đăng nhập và có role "user", hiển thị nội dung được bảo vệ
    return children;
  }

  // Nếu không đủ điều kiện, điều hướng về trang đăng nhập
  return <Navigate to="/my-account" replace />;
};
