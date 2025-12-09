import React from "react";
import Header from "../components/Header";
import ProductionHouse from "../components/ProductionHouse";
import GenreMovieList from "../components/GenreMovieList";
import Slider from "../components/Slider";
const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />{" "}
    </div>
  );
};

export default HomePage;
