import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("add-services");
  const [service, setService] = useState([]);
  const submitData = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/services", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (service.acknowledged) {
          setService(data);
          e.target.reset();
        }
      });
    alert("Service");
  };
  console.log(service);
  const onBlurSubmit = (event) => {
    console.log(event.target.value);
    const field = event.target.name;
    const value = event.target.value;
    let newService = [...service];
    newService[field] = value;
    setService(newService);
  };
  return (
    <div>
      <div className="bg-primary min-h-screen flex flex-col items-center justify-center ">
        <div
          className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-5 rounded-xl w-50 max-w-md
"
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Add a Services
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter All Requirement Information To Add a Service
          </div>

          <div className="mt-10">
            <form onSubmit={submitData}>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Service Image
                </label>
                <div className="relative">
                  <input
                    onBlur={onBlurSubmit}
                    required
                    type="text"
                    name="link"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400  w-full  py-2 focus:outline-none focus:border-blue-400 "
                    placeholder="Enter your service image link"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <label className="mb-1 text-xs tracking-wide text-gray-600">
                  Service Name:
                </label>
                <div className="relative">
                  <input
                    onBlur={onBlurSubmit}
                    required
                    type="text"
                    name="text"
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
                    onBlur={onBlurSubmit}
                    required
                    type="text"
                    name="description"
                    rows="5"
                    className=" text-sm  placeholder-gray-500  pl-10  pr-4  rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
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
                    onBlur={onBlurSubmit}
                    required
                    type="number"
                    name="price"
                    className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400
          "
                    placeholder="Enter your service price"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex mt-2 items-center  justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500  py-2  w-1/2 mx-auto transition duration-150 rounded-xl ease-in "
                >
                  <span className="mr-2 uppercase">Add service</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
