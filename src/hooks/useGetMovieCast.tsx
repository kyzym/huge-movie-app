import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../utils/api/api';
import { Actor } from '../types';

export const useGetMovieCast = () => {
  const [cast, setCast] = useState<Actor[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieCast(movieId)
        .then(setCast)
        .catch((error) => console.log(error));
    }
  }, [movieId]);

  return cast;
};
