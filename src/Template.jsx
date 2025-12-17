import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import GlobalApi from "./services/GlobalApi";
import { GenresContext } from "./Context";
// import { GenresContext } from "./Context";

const Template = () => {
  const [genres, setGenres] = useState({
    movie: [],
    tv: [],
  });

  useEffect(() => {
    const fetchGenres = async () => {
      const [movieRes, tvRes] = await Promise.all([
        GlobalApi.getGenres("movie"),
        GlobalApi.getGenres("tv"),
      ]);

      setGenres({
        movie: movieRes.data.genres,
        tv: tvRes.data.genres,
      });
    };

    fetchGenres();
  }, []);

  return (
    <GenresContext.Provider value={{ genres: genres }}>
      <Header />
      <Outlet />
      <Footer />
    </GenresContext.Provider>
  );
};

export default Template;
