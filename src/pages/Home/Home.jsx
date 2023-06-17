import { FcFilmReel } from 'react-icons/fc';

import * as SC from '../Home/Home.styled';
import { useGetMovies } from '../../hooks/useGetMovies';
import { Box } from '../../utils/Box.styled';
import { Loader } from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const { movies, loading, success } = useGetMovies();

  return (
    <Box p="20px">
      <SC.Title>
        Trending today
        <FcFilmReel />
      </SC.Title>
      {loading && <Loader />}
      <SC.Gallery>{success && <MoviesList movies={movies} />}</SC.Gallery>
    </Box>
  );
};
<Loader />;

export default Home;
