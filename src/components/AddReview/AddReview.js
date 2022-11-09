import React, { useState } from "react";
import styles from "../../styles";

const AddReview = ({ item }) => {
  const [reviews, setReview] = useState({});
  const submitData = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.text.value;
    setReview(review);
    console.log(review);
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    let newReview = { ...reviews };
    newReview[field] = value;
    setReview(newReview);

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/services/${item._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully user created");
          setReview(data);
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h1>add review</h1>
      <div className="flex">
        <form onSubmit={submitData}>
          <textarea
            name="text"
            type="text"
            rows="4"
            cols="50"
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
