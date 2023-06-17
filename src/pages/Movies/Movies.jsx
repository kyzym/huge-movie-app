import { Box } from '../../utils/Box.styled';

import Searchbox from '../../components/SearchBar/Searchbox';
import MoviesSearchResult from '../../components/MoviesSearchResult/MoviesSearchResult';

import { useGetSearchMovies } from '../../hooks/useGetSearchMovies';
import { Loader } from '../../components/Loader/Loader';

const Movies = () => {
  const { handleFormSubmit, isEmpty, success, loading, movies } =
    useGetSearchMovies();

  return (
    <Box p="20px" m="0 auto">
      <Searchbox onSubmit={handleFormSubmit} />
      {loading && <Loader />}

      {isEmpty && (
        <Box as="h3" textAlign="center">
          ❌ Movies not found...
        </Box>
      )}

      {success && <MoviesSearchResult movies={movies} />}
    </Box>
  );
};

export default Movies;
