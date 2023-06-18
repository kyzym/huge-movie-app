import Searchbox from '../../components/SearchBar/Searchbox';
import MoviesSearchResult from '../../components/MoviesSearchResult/MoviesSearchResult';

import { useGetSearchMovies } from '../../hooks/useGetSearchMovies';
import { Loader } from '../../components/Loader/Loader';

import * as SC from './Movies.styled';

const Movies = () => {
  const { handleFormSubmit, isEmpty, success, loading, movies } =
    useGetSearchMovies();

  return (
    <SC.MoviesWrapper>
      <Searchbox onSubmit={handleFormSubmit} />
      {loading && <Loader />}

      {isEmpty && <SC.NotFound>❌ Movies not found...</SC.NotFound>}

      {success && <MoviesSearchResult movies={movies} />}
    </SC.MoviesWrapper>
  );
};

export default Movies;
