import axios from 'axios';
import {
  Actor,
  ActorsData,
  ApiResponse,
  Movie,
  MovieDetails,
  Review,
  ReviewsData,
} from '../../types';

const KEY = 'fc60a6bdb24ebf37b614cab96927d720';
// axios.defaults.baseURL = 'https://vercel-tmdb-proxy-murex.vercel.app/api';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// https://vercel-tmdb-proxy-murex.vercel.app

export const getTrending = async (): Promise<Movie[]> => {
  const { data } = await axios<ApiResponse>('/trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  const { data } = await axios<MovieDetails>(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    },
  });

  return data;
};

export const getMovieCast = async (movieId: string): Promise<Actor[]> => {
  const { data } = await axios<ActorsData>(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.cast;
};

export const getMovieReviews = async (movieId: string): Promise<Review[]> => {
  const { data } = await axios<ReviewsData>(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.results;
};

export const getSearchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await axios<ApiResponse>('/search/movie', {
    params: {
      api_key: KEY,
      include_adult: false,
      query,
    },
  });

  return data.results;
};

export const startImageUrl = 'https://image.tmdb.org/t/p/w500';
