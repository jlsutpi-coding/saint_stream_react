import Slider from "./Slider";
import GenreMovieList from "./GenreMovieList";
import ProductionHouse from "./ProductionHouse";

const HomePage = () => {
  return (
    <div className="pt-20">
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default HomePage;
