import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const mykey ='1698dbfb1c4c0fea8186ce27f20e5bf7';

export const imageURLBaseWidth200 = 'https://image.tmdb.org/t/p/w200';
export const imageURLBaseWidth300 = 'https://image.tmdb.org/t/p/w300';

export const fetchMostPopularMovies = () => {
  return axios.get(
    `/trending/movie/day?api_key=${mykey}`,
  );
};

export const fetchMovieByQuery = (query) => {
  return axios.get(
    `/search/movie?api_key=${mykey}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
};

export const fetchDetailsAboutMovie = id => {
  return axios.get(`/movie/${id}?api_key=${mykey}`);
};

export const fetchMovieCast = id => {
  return axios.get(
    `/movie/${id}/credits?api_key=${mykey}`,
  );
};

export const fetchMovieReviews = id => {
  return axios.get(
    `/movie/${id}/reviews?api_key=${mykey}`,
  );
};