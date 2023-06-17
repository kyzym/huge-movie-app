import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../utils/api/api';
import { MovieDetails, UseGetMovieDetailsReturn } from '../types';
import { mockMovieDetails } from '../components/mocks/mocks';

export const useGetMovieDetails = (): UseGetMovieDetailsReturn => {
  const [movieDetails, setMovieDetails] =
    useState<MovieDetails>(mockMovieDetails);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);

      try {
        if (movieId) {
          const details = await getMovieDetails(movieId);
          setMovieDetails(details);
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [movieId, setLoading]);

  return { movieDetails, backLinkHref, loading, success };
};
