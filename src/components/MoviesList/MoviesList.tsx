import { ImageGalleryItem, ImageGalleryItemImage } from './MoviesList.styles';

import * as SC from './MoviesList.styles';
import { startImageUrl } from '../../utils/api/api';
import { MoviesListProps } from '../../types';

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return movies.map(({ id, title, poster_path, vote_average }) => (
    <ImageGalleryItem key={id}>
      <SC.StyledLink to={`movies/${id}`}>
        <ImageGalleryItemImage
          src={startImageUrl + poster_path}
          alt={title}></ImageGalleryItemImage>
        <SC.TitleContainer>
          <SC.Title>{title}</SC.Title>
          {vote_average > 1 && (
            <SC.Rating rating={parseFloat(vote_average.toFixed())}>
              {(vote_average * 10).toFixed(1)}%
            </SC.Rating>
          )}
        </SC.TitleContainer>
      </SC.StyledLink>
    </ImageGalleryItem>
  ));
};

export default MoviesList;
