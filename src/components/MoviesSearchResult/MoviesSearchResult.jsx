import { useLocation } from 'react-router-dom';
import { startImageUrl } from '../../utils/api/api';
import { Box } from '../../utils/Box.styled';
import { noImage } from '../../utils/services';
import * as SC from '../MoviesSearchResult/MoviesSearchResult.styled';

const MoviesSearchResult = ({ movies }) => {
  const location = useLocation();

  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      gridGap={20}
      justifyContent="center">
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <SC.MovieListItem key={id}>
          <SC.MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <SC.Photo
              src={poster_path ? startImageUrl + poster_path : noImage}
              alt={title}
              width="200px"
            />

            <SC.TitleRating>
              <b>{title}</b>
              {vote_average > 1 ? (
                <SC.Rating rating={vote_average.toFixed()}>
                  {(vote_average * 10).toFixed(2)}%
                </SC.Rating>
              ) : (
                <SC.Rating rating={vote_average.toFixed()}>
                  <p>No rating</p>
                </SC.Rating>
              )}
            </SC.TitleRating>
          </SC.MovieLink>
        </SC.MovieListItem>
      ))}
    </Box>
  );
};

export default MoviesSearchResult;
