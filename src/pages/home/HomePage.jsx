import React from "react";
import Header from "../../components/Header";
import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenreMovieList from "./GenreMovieList";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList /> <Footer />
    </div>
  );
};

export default HomePage;
