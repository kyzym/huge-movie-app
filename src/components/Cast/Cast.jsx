import { useGetMovieCast } from 'hooks/useGetMovieCast';
import { startImageUrl } from 'utils/api/api';
import { Box } from 'utils/Box.styled';
import { noImage } from 'utils/services';
import * as SC from './Cast.styled';

const Cast = () => {
  const cast = useGetMovieCast();

  if (!cast) return null;

  return (
    <Box as="div" p="20px">
      {cast.length > 0 ? (
        <Box as="ul" display="flex" flexWrap="wrap" gridGap={20}>
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
        </Box>
      ) : (
        <p>No cast : (</p>
      )}
    </Box>
  );
};

export default Cast;
