import axios from 'axios';

const KEY = 'fc60a6bdb24ebf37b614cab96927d720';
axios.defaults.baseURL = 'https://vercel-tmdb-proxy-murex.vercel.app/api';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// https://vercel-tmdb-proxy-murex.vercel.app

// export const getTrending = async () => {
//   const { data } = await axios('/trending/movie/day', {
//     params: {
//       api_key: KEY,
//     },
//   });

//   return data.results;
// };
export const getTrending = async () => {
  const { data } = await axios('/trending/movie/day');
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getSearchMovies = async (query) => {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return data.results;
};

export const startImageUrl = 'https://image.tmdb.org/t/p/w500';
