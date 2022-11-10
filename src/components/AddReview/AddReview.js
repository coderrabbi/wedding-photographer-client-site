import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import styles from "../../styles";

const AddReview = ({ item }) => {
  const [reviews, setReview] = useState([]);
  const { user } = useContext(AuthContext);
  const handleReview = (e) => {
    e.preventDefault();
    console.log(typeof reviews);

    fetch(`http://localhost:5000/services/${item._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          alert("review added");
        }
      });

    e.target.reset();
  };
  const handleInputRev = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setReview([{ ...item, review: { reviewer: user.email, [name]: value } }]);
  };

  return (
    <div>
      <h1>add review</h1>
      <div className="flex">
        <form onSubmit={handleReview}>
          <input
            onChange={handleInputRev}
            name="title"
            type="text"
            className="
        text-sm
        pl-10
        pr-4
        rounded-2xl
        border border-gray-400
        w-full
        py-2
        focus:outline-none focus:border-blue-400
      "
          />

          <button
            type="submit"
            className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
          >
            Add review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
