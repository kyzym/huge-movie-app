import { useGetMovieReviews } from '../../hooks/useGetMovieReviews';
import * as SC from './Reviews.styled';

const Reviews = () => {
  const reviews = useGetMovieReviews();

  if (!reviews) return null;

  return (
    <SC.ReviewWrapper>
      {reviews.length > 0 ? (
        <SC.ReviewsList>
          {reviews.map(({ author, content, id, created_at }) => (
            <SC.Review key={id}>
              <h3>Author: {author}</h3>
              <p>
                <b>Review:</b>
              </p>
              <p>{content ? content : <p>No review</p>}</p>
              <p>
                <b>Date:</b>{' '}
                {created_at ? (
                  new Date(created_at).toLocaleDateString('en-US')
                ) : (
                  <p>No date</p>
                )}
              </p>
            </SC.Review>
          ))}
        </SC.ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie, yet.</p>
      )}
    </SC.ReviewWrapper>
  );
};

export default Reviews;
