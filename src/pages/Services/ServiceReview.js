import React, { useEffect, useState } from "react";

const ServiceReview = ({ item }) => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/review`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, [review]);
  const filterReview = review?.filter((i) => i.serviceId === item._id);

  return (
    <div className=" border-t-2 border-gray-200 ">
      {filterReview?.map((rev) => (
        <div key={rev._id} className="mt-5">
          <div className="  items-center">
            <div className="flex  items-center gap-2">
              <img
                className="w-[80px] rounded-full"
                src={rev.photoURL ? rev.photoURL : ""}
                alt={rev.displayName}
              />
              <div className="flex flex-col">
                <span className="text-gray-200 text-[16px]">
                  {rev.displayName}
                </span>
                <span className="text-gray-200">***</span>
                <span className="text-gray-200">{rev.timeStamp}</span>
              </div>
            </div>
            <div>
              <div className="flex flex-col ">
                <p className="text-gray-200">{rev.describe}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceReview;
