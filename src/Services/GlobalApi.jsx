import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "aa1c1def5cdf04d3c70f27af3bfddad6";

const movieGenreBaseUrl = "https://api.themoviedb.org/3/discover/movie";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const getTrendingVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${apiKey}`
);

const getMovieByGenreId = (id) => {
  return axios.get(`${movieGenreBaseUrl}?api_key=${apiKey}&with_genres=${id}`);
};

const getMovieDeatail = (id, media_type) => {
  return axios.get(`${movieBaseUrl}/${media_type}/${id}?api_key=${apiKey}`);
};

const getCastForDetail = (id, media_type) => {
  return axios.get(
    `${movieBaseUrl}/${media_type}/${id}/credits?api_key=${apiKey}`
  );
};

const getSimilar = (id, media_type) => {
  return axios.get(
    `${movieBaseUrl}/${media_type}/${id}/similar?api_key=${apiKey}`
  );
};

const getGenres = (media_type) => {
  return axios.get(
    `${movieBaseUrl}/genre/${media_type}/list?api_key=${apiKey}`
  );
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
  IMAGE_BASE_URL,
  getMovieDeatail,
  getCastForDetail,
  getSimilar,
  getGenres,
};
