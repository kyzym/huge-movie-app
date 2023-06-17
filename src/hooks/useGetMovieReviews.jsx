import { useEffect, useState } from 'react';
import { getMovieReviews } from 'utils/api/api';
import { useParams } from 'react-router-dom';

export const useGetMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return reviews;
};
