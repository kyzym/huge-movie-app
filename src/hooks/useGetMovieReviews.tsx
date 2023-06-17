import { useEffect, useState } from 'react';
import { getMovieReviews } from '../utils/api/api';
import { useParams } from 'react-router-dom';
import { Review } from '../types';

export const useGetMovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (movieId) {
      getMovieReviews(movieId)
        .then(setReviews)
        .catch((error) => console.log(error));
    }
  }, [movieId]);

  return reviews;
};
