import { useEffect, useState } from 'react';
import { getTrending } from '../utils/api/api';
import { Movie } from '../types';

interface UseGetMoviesReturn {
  movies: Movie[];
  loading: boolean;
  success: boolean;
}

export const useGetMovies = (): UseGetMoviesReturn => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      try {
        const response: Movie[] = await getTrending();
        setMovies(response);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return { movies, loading, success };
};
