import React from "react";
import useTitle from "../../hooks/useTitle";

const ServiceReview = ({ item }) => {
  useTitle("servie-review");
  const { review } = item;
  return (
    <div className=" border-t-2 border-gray-200 ">
      {review?.map((rev) => (
        <div key={rev.reviewerEmail} className="mt-5">
          <div className="flex gap-4 items-center">
            <div className="flex  items-center gap-2">
              <img
                className="w-[50px]"
                src={rev.reviewerImg}
                alt={rev.reviewer}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-200 text-[16px]">{rev.reviewer}</span>
              <div className="flex gap-3">
                <span className="text-gray-200">***</span>
                <span className="text-gray-200">{rev.timeStamp}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-200 my-3">{rev.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceReview;
