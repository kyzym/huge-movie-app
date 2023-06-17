import * as SC from './MovieDetailList.styled';
import { startImageUrl } from 'utils/api/api';

const MovieDetailList = ({
  movieDetails: { id, title, poster_path, overview, genres, vote_average },
}) => (
  <SC.MovieDetailList key={id}>
    <img src={startImageUrl + poster_path} alt="title" width="350px"></img>
    <div>
      <SC.Title>{title}</SC.Title>
      <SC.SubTitle>Overview:</SC.SubTitle>
      <SC.TextContent>{overview}</SC.TextContent>

      <SC.SubTitle>Genres:</SC.SubTitle>
      <SC.TextContent>
        {genres.map(({ name }) => name).join(', ')}
      </SC.TextContent>

      <SC.SubTitle>
        Users score:
        <SC.Rating rating={vote_average.toFixed()}>
          {(vote_average * 10).toFixed(2)}
        </SC.Rating>
        %
      </SC.SubTitle>
    </div>
  </SC.MovieDetailList>
);

export default MovieDetailList;
