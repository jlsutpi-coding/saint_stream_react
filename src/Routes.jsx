import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Template from "./Template";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import DiscoverPage from "./pages/discover/DiscoverPage";
import MoviePage from "./pages/movie/MoviePage";
import Detail from "./pages/detail/Detail";
import Company from "./pages/discover/Company";
import SeriesPage from "./pages/series/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:media_type/:movie_id",
        element: <Detail />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/discover/:company_id",
        element: <Company />,
      },
      {
        path: "/discover",
        element: <DiscoverPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "tv",
        element: <SeriesPage />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
