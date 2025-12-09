import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:movieId",
    element: <MovieDetail />,
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
