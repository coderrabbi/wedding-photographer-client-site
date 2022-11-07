import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../common/ErrorPage";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Main />,
  },
]);
