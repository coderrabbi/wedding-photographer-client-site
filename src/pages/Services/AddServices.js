import React from "react";
import { Link } from "react-router-dom";

const AddServices = () => {
  return (
    <div>
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center ">
        <div
          className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8
  lg:px-10
  py-5
  rounded-xl
  w-50
  max-w-md
"
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Add a Services
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter All Requirement Information To Add a Service
          </div>

          <div className="mt-10">
            <form>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Service Image
                </label>
                <div className="relative">
                  <input
                    required
                    type="file"
                    name="file"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400  w-full  py-2 focus:outline-none focus:border-blue-400 "
                    placeholder="Enter your service name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Service Name:
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    name="name"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl  border border-gray-400  w-full  py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter your service name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Description of service
                </label>
                <div className="relative">
                  <textarea
                    required
                    type="text"
                    name="description"
                    rows="5"
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
                    placeholder="Enter your service description"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                  Price of service
                </label>
                <div className="relative">
                  <input
                    required
                    type="number"
                    name="price"
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
                    placeholder="Enter your service price"
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
                  <span className="mr-2 uppercase">Add service</span>
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
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
