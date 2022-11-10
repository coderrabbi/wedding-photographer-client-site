import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AddReview from "../../components/AddReview/AddReview";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet";
import styles from "../../styles";
import ServiceReview from "./ServiceReview";

const ServiceItems = () => {
  const { user } = useContext(AuthContext);

  const db = useLoaderData();

  return (
    <div
      className={`${styles.paddingX}${styles.paddingY} flex flex-col  gap-4`}
    >
      <Helmet>
        <title>Service items-wedding-photographer</title>
      </Helmet>
      <div className="w-full mx-auto  overflow-hidden shadow-lg">
        <img className="w-full rounded" src={db.imgUrl} alt={db.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-200">{db.title}</div>
          <p className="text-gray-200 text-base">{db.description}</p>
          <div className="flex justify-start items-center gap-10 mt-5">
            <span className="text-gray-200 ">
              Number Of Review: {db.numOfReview}
            </span>
            <span className="text-gray-200 ">Rating: {db.rating}</span>
          </div>
        </div>
      </div>
      <ServiceReview item={db} />
      {user ? <AddReview item={db} /> : ""}
    </div>
  );
};

export default ServiceItems;
