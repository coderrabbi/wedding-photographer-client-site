import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { routes } from "./Routes/Router";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="bg-primary w-full ">
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
