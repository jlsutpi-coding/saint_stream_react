import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./pages/Detail/Detail";
import HomePage from "./pages/home/HomePage";
import Detail from "./pages/Detail/Detail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:media_type/:movie_id",
    element: <Detail />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
