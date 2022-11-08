import React from "react";
import { Link } from "react-router-dom";
import { MdPersonPin, MdAlternateEmail, MdOutlineLock } from "react-icons/md";
const Register = () => {
  return (
    <div>
      {" "}
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center ">
        <div
          className="
  flex flex-col
  bg-white
  shadow-md
  px-4
  sm:px-6
  md:px-8
  lg:px-10
  py-8
  rounded-3xl
  w-50
  max-w-md
"
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Join us Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials to get access account
          </div>

          <div className="mt-10">
            <form>
              <div className="flex flex-col mb-5">
                <label
                  for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name:
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
                    <MdPersonPin className="text-blue-600 text-xl" />
                  </div>

                  <input
                    id="email"
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
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label
                  for="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
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
                    id="email"
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
                <label
                  for="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
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
                    id="password"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
          <Link
            target="_blank"
            className="
    inline-flex
    items-center
    text-gray-700
    font-medium
    text-xs text-center
  "
          >
            <span className="ml-2">
              You have an account?
              <Link
                to="/login"
                className="text-xs ml-2 text-blue-500 font-semibold"
              >
                Login here
              </Link>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
