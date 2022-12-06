import React, { useState } from "react";

import { Helmet } from "react-helmet";

import Swal from "sweetalert2";
import styles from "../../styles";
const AddServices = () => {
  const [service, setService] = useState({});
  // const [review, setReview] = useState([]);
  const addUser = (e) => {
    // post data

    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Good job!", "You added a service", "success");
          e.target.reset();
        }
      });
  };

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setService({ ...service, [name]: value });
  };

  return (
    <div className="w-full mx-auto my-8">
      {/* page title change */}
      <Helmet>
        <title>Add Service-Wedding-Photographer</title>
      </Helmet>
      <div
        className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8lg:px-10
          py-8
          rounded-3xl
          w-50
          mx-auto
          max-w-md
          "
      >
        <form onSubmit={addUser} className=" flex flex-col gap-3">
          <input
            onChange={handleInput}
            required
            type="text"
            name="imgUrl"
            placeholder="imgUrl"
            className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
        "
          />

          <input
            onChange={handleInput}
            required
            type="text"
            name="title"
            placeholder="Title"
            className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
         "
          />
          <textarea
            onChange={handleInput}
            required
            rows="5"
            type="text"
            name="description"
            placeholder="description"
            className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
         "
          />

          <input
            onChange={handleInput}
            required
            type="number"
            name="price"
            placeholder="price"
            className="
            text-sm
            placeholder-gray-500
            pl-10
            pr-4
            rounded-2xl
            border border-gray-400
            w-full
            py-2
         "
          />

          {/* submit button */}
          <button
            className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
            type="submit"
          >
            Add service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
