import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Router";

function App() {
  return (
    <div className="bg-primary w-full ">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
