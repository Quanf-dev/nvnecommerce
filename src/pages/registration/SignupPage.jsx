import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/myContext";
import useUserSignup from "../../hooks/useUserSignup";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Loader } from "lucide-react";
import { Toaster } from "react-hot-toast";

const Signup = () => {
  const userSignupFunction = useUserSignup(auth, fireDB);
  const { loading } = useContext(myContext);

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    userSignupFunction(userSignup, setUserSignup);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {loading && <Loader />}
      {/* Login Form  */}
      <div className="px-8 py-6 border border-pink-100 shadow-md login_Form bg-pink-50 rounded-xl">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-center text-pink-500 "></h2>
        </div>
        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
            className="px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
          />
        </div>
        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
          />
        </div>
        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            className="px-2 py-2 placeholder-pink-200 border border-pink-200 rounded-md outline-none bg-pink-50 w-96"
          />
        </div>
        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleSignup}
            className="w-full py-2 font-bold text-center text-white bg-pink-500 rounded-md hover:bg-pink-600 "
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className="font-bold text-pink-500 " to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
