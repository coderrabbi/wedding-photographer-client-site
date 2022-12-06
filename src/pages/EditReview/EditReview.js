import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import styles from "../../styles";

const EditReview = () => {
  const { user } = useContext(AuthContext);
  const editableData = useLoaderData();
  const [editReview, setEditReview] = useState(editableData);

  const editUserReview = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/review/${editReview._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editReview),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("editReview successfully updated");
      });
  };
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setEditReview({ ...editReview, [name]: value });
  };
  console.log(editableData);
  return (
    <div>
      <div
        className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8lg:px-10
          py-8
          rounded-3xl
          w-50
          mx-auto
          max-w-md
          "
      >
        <form onSubmit={editUserReview} className=" flex flex-col gap-3">
          <textarea
            onChange={handleInput}
            required
            rows="5"
            value={editReview.describe}
            type="text"
            name="describe"
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

export default EditReview;
