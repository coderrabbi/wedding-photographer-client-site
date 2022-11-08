import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from "../../styles";

const Services = () => {
  const db = useLoaderData();
  console.log(db);
  return (
    <div>
      <div
        className={`flex md:flex-row flex-col items-center justify-center gap-5 ${styles.paddingY}`}
      >
        {db?.map((item) => (
          <div className="rounded-lg shadow-lg bg-white max-w-sm" key={item.id}>
            <Link>
              <img className="rounded-t-lg" src={item.imgUrl} alt="" />
            </Link>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {item.title}
              </h5>
              <p className="text-gray-700 text-base mb-4">{item.description}</p>
              <div>
                <div className=" flex justify-between items-center ">
                  <p>price: ${item.price}</p>
                  <p>{item.rating}</p>
                </div>
                <Link
                  to={`/services/${item.id}`}
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  See more details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
