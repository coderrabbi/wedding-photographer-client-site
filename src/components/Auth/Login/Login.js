import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import Auth from "../Auth/Auth";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { signIn, loading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((result) => {
      const user = result.user;
      if (user.uid) {
        navigate(from, { replace: true });
        loading = false;
        toast.success("login successful");
      }
    });
  };

  return (
    <div>
      {" "}
      <Helmet>
        <title>Login-wedding-photographer</title>
      </Helmet>
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center ">
        <div
          className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
          "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Login Now
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-5"></div>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  E-Mail Address:
                </label>
                <div className="relative">
                  <div
                    className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
      "
                  >
                    <MdAlternateEmail className="text-blue-500 text-xl" />
                  </div>

                  <input
                    type="email"
                    name="email"
                    className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
      "
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Password:
                </label>
                <div className="relative">
                  <div
                    className="
        inline-flex
        items-center
        justify-center
        absolute
        left-0
        top-0
        h-full
        w-10
        text-gray-400
      "
                  >
                    <span>
                      <MdOutlineLock className="text-blue-500 text-xl " />
                    </span>
                  </div>

                  <input
                    type="password"
                    name="password"
                    className="
        text-sm
        placeholder-gray-500
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
      "
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex
                  
      mt-2
      items-center
      justify-center
      focus:outline-none
      text-white text-sm
      sm:text-base
      bg-blue-500
      hover:bg-blue-600
      rounded-2xl
      py-2
      w-full
      transition
      duration-150
      ease-in
    "
                >
                  <span className="mr-2 uppercase">Sign Up</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6">
          <div
            className="
inline-flex
items-center
text-gray-700
font-medium
text-xs text-center
"
          >
            <span className="ml-2 text-white">
              You don't have an account?
              <Link
                to="/register"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Register here
              </Link>
            </span>
          </div>
        </div>
        <Auth />
      </div>
    </div>
  );
};

export default Login;
