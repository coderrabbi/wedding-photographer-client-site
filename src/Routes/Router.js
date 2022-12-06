import { createBrowserRouter } from "react-router-dom";
import Blog from "../common/Blog/Blog";
import ErrorPage from "../common/ErrorPage";
import About from "../components/About/About";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import MyReviews from "../pages/MyReviews/MyReviews";
import AddServices from "../pages/Services/AddServices";
import ServiceItems from "../pages/Services/ServiceItems";
import Allservices from "../pages/Services/Allservices";

import PrivetRouter from "./privetRouter/PrivetRouter";
import EditReview from "../pages/EditReview/EditReview";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        // loader: () =>
        //   fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/services`),
        element: <Home />,
      },
      {
        path: "/services",
        loader: () =>
          fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/allservices`),
        element: <Allservices />,
      },
      {
        path: "/services/:id",

        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_SERVER_BASE_URL}/services/${params.id}`
          ),
        element: <ServiceItems />,
      },
      { path: "/blog", element: <Blog /> },
      {
        path: "/addservices",
        element: (
          <PrivetRouter>
            <AddServices />{" "}
          </PrivetRouter>
        ),
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      {
        path: "/reviews",
        element: (
          <PrivetRouter>
            <MyReviews />
          </PrivetRouter>
        ),
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
        element: (
          <PrivetRouter>
            <EditReview />
          </PrivetRouter>
        ),
      },

      { path: "/register", element: <Register /> },
    ],
  },
]);
