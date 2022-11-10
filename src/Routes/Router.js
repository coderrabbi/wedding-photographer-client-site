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
import Services from "../pages/Services/Services";
import PrivetRouter from "./privetRouter/PrivetRouter";

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
          fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/services`),
        element: <Services />,
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
      { path: "/addservices", element: <AddServices /> },
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
      { path: "/register", element: <Register /> },
    ],
  },
]);
