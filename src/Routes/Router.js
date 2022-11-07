import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../common/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
