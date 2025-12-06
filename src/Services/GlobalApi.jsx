import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "aa1c1def5cdf04d3c70f27af3bfddad6";

// https://api.themoviedb.org/3/trending/movie/day?api_key=aa1c1def5cdf04d3c70f27af3bfddad6

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);
export default getTrendingVideos;
