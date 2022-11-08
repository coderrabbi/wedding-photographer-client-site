import { createBrowserRouter } from "react-router-dom";
import Blog from "../common/Blog/Blog";
import ErrorPage from "../common/ErrorPage";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Home from "../components/Home/Home";
import Main from "../Layout/Main";
import Services from "../pages/Services/Services";

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
        element: <Home />,
      },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
