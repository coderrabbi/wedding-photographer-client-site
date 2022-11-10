import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from "../../styles";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet";
const Services = () => {
  const db = useLoaderData();
  console.log(db.length);
  return (
    <div>
      <Helmet>
        <title>Service-wedding photographer</title>
      </Helmet>
      <div
        className={`flex-1 ${styles.flexCenter} mt-8 flex-col xl:px-0 sm:px-16 px-6  `}
      >
        <h1 className="font-poppins  font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          My
          <span className="text-gradient"> Services </span>
        </h1>
      </div>
      <div
        className={`grid md:grid-cols-3 grid-cols-1  items-center justify-center gap-5 py-5 `}
      >
        <PhotoProvider>
          {db?.map((item) => (
            // <div className="flex flex-wrap -mx-4">
            <div>
              <div className="w-full   p-4">
                <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-48 overflow-hidden">
                    <PhotoView>
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={item.imgUrl}
                        alt={item.title}
                      />
                    </PhotoView>
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                      Highlight
                    </span>
                    <h2 className="mt-2 mb-2  font-bold">{item.title}</h2>
                    <p className="text-sm">{item.description}</p>
                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-semibold">$ </span>
                      <span className="font-bold text-xl">{item.price}</span>
                    </div>
                  </div>

                  <div className="p-4 flex items-center text-sm text-gray-600">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-yellow-500"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current text-gray-400"
                    >
                      <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                    </svg>
                    <span className="ml-2">{item.numOfReview} Reviews</span>
                  </div>
                  <button
                    type="button"
                    className={`  py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] my-6 ml-4`}
                  >
                    <Link to={`/services/${item._id}`}> See more details</Link>
                  </button>
                </div>
              </div>

              <div />
            </div>
          ))}
        </PhotoProvider>
      </div>
      <div className="text-center mb-5 ">
        {db.length > 3 ? (
          <button
            type="button"
            className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
          >
            <Link to="services"> See Services</Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Services;
