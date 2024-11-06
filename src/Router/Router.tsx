import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ProjectList from "../components/ProjectList";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Not found",
    children: [
      {
        path: "/projects",
        element:<ProjectList/> ,
      },
    ],
    
  },

]);

const Router = () => <RouterProvider router={router} />;

export default Router;
