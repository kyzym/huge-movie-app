import { FcFilmReel } from 'react-icons/fc';
import * as SC from './Home.styled';
import { useGetMovies } from '../../hooks/useGetMovies';
import { Loader } from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const { movies, loading, success } = useGetMovies();

  return (
    <SC.HomeWrapper>
      <SC.Title>
        Trending today
        <FcFilmReel />
      </SC.Title>
      {loading && <Loader />}
      <SC.Gallery>{success && <MoviesList movies={movies} />}</SC.Gallery>
    </SC.HomeWrapper>
  );
};
<Loader />;

export default Home;
