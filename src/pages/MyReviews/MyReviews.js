import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { CiEdit, CiTrash } from "react-icons/ci";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  console.log(myReviews);
  useEffect(() => {
    fetch(`http://localhost:5000/user-review?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("service_token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email, logOut]);
  const handelDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      fetch(`http://localhost:5000/user-review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myReviews.filter((review) => review._id !== id);
            setMyReviews(remaining);
          }
          alert("reviews deleted");
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title>My reviews-Weeding-photographer</title>
      </Helmet>
      <div className="py-6">
        <h4>my review</h4>
        {myReviews.length === 0 ? (
          <div>
            <h1 className="text-white text-[70px] text-center text-bold">
              NO REVIEW FOUND
            </h1>
          </div>
        ) : (
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Service Title
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Review
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Edit
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {myReviews?.map((review) => (
                  <tr
                    key={review._id}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {review.serviceTitle}
                    </th>
                    <td className="py-4 px-6">
                      {review.describe.slice(0, 100) + "..."}
                    </td>

                    <td className="py-4 px-6">
                      <span className="flex justify-between items-center">
                        <Link
                          to={review._id}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <CiEdit className="text-3xl" />
                        </Link>
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <span className="flex justify-between items-center">
                        <CiTrash
                          onClick={() => handelDelete(review._id)}
                          className="text-3xl text-blue-500"
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
