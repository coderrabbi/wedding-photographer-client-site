import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styles from "../../styles";

const MyReviews = () => {
  return (
    <div>
      <Helmet>
        <title>My reviews-Weeding-photographer</title>
      </Helmet>
      <div>
        <h4>my review</h4>
        <button
          type="button"
          className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
        >
          <Link to="services"> Explore Services</Link>
        </button>
      </div>
    </div>
  );
};

export default MyReviews;
