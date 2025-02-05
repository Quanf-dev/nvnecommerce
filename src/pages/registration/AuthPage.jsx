/* eslint-disable react/no-unescaped-entities */
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useUserLogin from "../../hooks/useUserLogin";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import Track from "../../components/track/Track";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import LayoutHome from "../../layout/LayoutHome";
import PageTitle from "../../components/pageTitle/PageTitle";
import Announcement from "../../components/announcement/Announcement ";
import useUserSignup from "../../hooks/useUserSignup";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action") || "";

  const [isLogin, setIsLogin] = useState(false);
  const [fade, setFade] = useState(false);
  const handleSwitch = () => {
    setFade(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setFade(false);
    }, 100); // Thời gian khớp với transition trong CSS
  };
  useEffect(() => {
    setFade(true);
    setTimeout(() => setFade(false), 100);
  }, [isLogin]);
  useEffect(() => {
    if (action === "register") {
      setIsLogin(true);
    }
  }, [action]);
  return (
    <>
      <Announcement />
      <Navbar />
      <PageTitle title={"My account"} />
      <LayoutHome>
        <div className="flex gap-10 p-10">
          <div
            className={`transition-opacity duration-100 w-full flex-1 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {" "}
            {isLogin ? <SignupForm /> : <LoginForm />}{" "}
          </div>
          <div className="w-full pl-10 border-l border-gray-300 md:w-1/2">
            <h2 className="text-2xl font-bold text-center mb-7">
              ĐĂNG KÝ TÀI KHOẢN
            </h2>
            <p className="text-center text-gray-700 mb-7">
              Đăng ký cho trang web này cho phép bạn truy cập vào trạng thái và
              lịch sử đặt hàng của bạn. Chỉ cần điền vào các trường bên dưới và
              chúng tôi sẽ nhận được một tài khoản mới được thiết lập cho bạn
              ngay lập tức. Chúng tôi sẽ chỉ yêu cầu bạn cung cấp thông tin cần
              thiết để làm cho quá trình mua hàng nhanh hơn và dễ dàng hơn.
            </p>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSwitch}
              >
                {" "}
                {isLogin ? "ĐĂNG NHẬP" : "ĐĂNG KÝ"}{" "}
              </button>
            </div>
          </div>
        </div>
      </LayoutHome>
      <Track />
      <Footer />
    </>
  );
};

const SignupForm = () => {
  const userSignupFunction = useUserSignup(auth, fireDB);

  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    userSignupFunction(userSignup, setUserSignup);
  };
  return (
    <div className="w-full h-96">
      <h1 className="mb-4 text-2xl font-bold">ĐĂNG KÝ</h1>
      <form>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Địa chỉ email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Mật khẩu <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <p className="mb-6 text-sm text-gray-600">
          Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn
          trên toàn bộ trang web này, để quản lý quyền truy cập vào tài khoản
          của bạn và cho các mục đích khác được mô tả trong chúng tôi.
        </p>
        <button
          onClick={handleSignup}
          className="w-full px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-primary-light focus:outline-none focus:shadow-outline"
          type="button"
        >
          ĐĂNG KÝ
        </button>
      </form>
    </div>
  );
};
const LoginForm = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const userLoginFunction = useUserLogin(auth, fireDB);
  const handleLogin = async (e) => {
    e.preventDefault();
    userLoginFunction(userLogin, setUserLogin);
  };

  return (
    <div className="flex items-center justify-center h-96 ">
      <div className="flex flex-col w-full h-full md:flex-row">
        <div className="w-full ">
          <h2 className="mb-4 text-2xl font-bold">ĐĂNG NHẬP</h2>
          <form>
            <div className="mb-7">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                htmlFor="username"
              >
                Tên tài khoản hoặc địa chỉ email{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                name="email"
                value={userLogin.email}
                onChange={(e) => {
                  setUserLogin({
                    ...userLogin,
                    email: e.target.value,
                  });
                }}
                placeholder="Tên tài khoản hoặc địa chỉ email"
              />
            </div>
            <div className="mb-7">
              <label
                className="block mb-2 text-sm font-normal text-gray-700"
                htmlFor="password"
              >
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Mật khẩu"
                  value={userLogin.password}
                  onChange={(e) => {
                    setUserLogin({
                      ...userLogin,
                      password: e.target.value,
                    });
                  }}
                />
                <i className="absolute text-gray-500 fas fa-eye right-3 top-3"></i>
              </div>
            </div>
            <div className="flex items-center justify-between mb-7">
              <button
                className="w-full px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-primary-light focus:outline-none focus:shadow-outline"
                type="button"
                onClick={(e) => handleLogin(e)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-gray-700">Lưu thông tin</span>
              </label>
              <a
                className="inline-block text-sm font-bold align-baseline text-primary hover:text-primary-light"
                href="#"
              >
                Quên mật khẩu?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
