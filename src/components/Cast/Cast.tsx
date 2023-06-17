import { useGetMovieCast } from '../../hooks/useGetMovieCast';
import { startImageUrl } from '../../utils/api/api';
import { noImage } from '../../utils/services';
import * as SC from './Cast.styled';

const Cast = () => {
  const cast = useGetMovieCast();

  if (!cast) return null;

  return (
    <SC.CastWrapper>
      {cast.length > 0 ? (
        <SC.CastList>
          {cast.map(({ name, character, profile_path, id }) => (
            <SC.CastItem key={id}>
              <SC.Photo
                src={profile_path ? startImageUrl + profile_path : noImage}
                alt={name}
                width="200"
                loading="lazy"
              />
              <SC.NameRole>
                <p>{name}</p>
                <p>
                  <b>Character: </b> {character}
                </p>
              </SC.NameRole>
            </SC.CastItem>
          ))}
        </SC.CastList>
      ) : (
        <p>No cast : (</p>
      )}
    </SC.CastWrapper>
  );
};

export default Cast;
