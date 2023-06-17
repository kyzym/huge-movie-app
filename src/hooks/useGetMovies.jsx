import { useEffect, useState } from 'react';
import { getTrending } from '../utils/api/api';

export const useGetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);
      try {
        const response = await getTrending();
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
