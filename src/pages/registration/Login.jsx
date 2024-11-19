/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Login Form  */}
      <div className="px-1 py-6 border border-pink-100 shadow-md login_Form bg-pink-50 lg:px-8 rounded-xl">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center text-pink-500 ">
            Login
          </h2>
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            className="px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            className="w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 "
          >
            Login
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Don't Have an account{" "}
            <Link className="font-bold text-pink-500 " to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
