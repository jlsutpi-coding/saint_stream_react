import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import "./no-scrollbar.css";
import MovieCard from "./MovieCard";
import {
  IoChevronBack,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const screenWidth = window.innerWidth;

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovirByGenreId = async () => {
      const response = await GlobalApi.getMovieByGenreId(genreId);
      setMovieList(response.data.results);
    };
    getMovirByGenreId();
  }, [genreId]);

  const elementRef = useRef(null);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      {/* left arrow */}
      <IoChevronBackOutline
        className=" hidden md:block  text-white cursor-pointer text-[30px] absolute top-[40%] z-10 "
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-10 no-scrollbar  pt-5 pb-10 px-3 scroll-smooth"
      >
        {movieList.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
      {/* right arrow */}
      <IoChevronForwardOutline
        className=" hidden md:block  text-white cursor-pointer text-[30px] absolute right-0 top-[40%]"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
};

export default MovieList;
