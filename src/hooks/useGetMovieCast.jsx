import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/api/api';

export const useGetMovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  return cast;
};
