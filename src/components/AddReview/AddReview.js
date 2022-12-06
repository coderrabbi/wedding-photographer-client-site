import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import styles from "../../styles";
import Swal from "sweetalert2";
import moment from "moment";
const AddReview = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { email, photoURL, displayName } = user;
  const [reviews, setReviews] = useState({});
  const handleReview = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/services/${item._id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        // if (data.acknowledged > 0) {
        Swal.fire("Good job!", "You added a review", "success");
        // }
      });

    e.target.reset();
  };
  const handleInputRev = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setReviews({
      ...reviews,
      email,
      photoURL,
      serviceTitle: item.title,
      displayName,
      timeStamp: moment().format("LL"),
      [name]: value,
      serviceId: item._id,
    });
  };

  return (
    <div>
      <h1>add review</h1>
      <div className="flex">
        <form onSubmit={handleReview}>
          <textarea
            onChange={handleInputRev}
            rows="10"
            cols="50"
            required
            name="describe"
            type="text"
            className=" text-sm pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className={`
            py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
          >
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
