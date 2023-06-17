import { Loader } from 'components/Loader/Loader';
import { useGetMovieDetails } from 'hooks/useGetMovieDetails';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'utils/Box.styled';
import * as SC from '../MovieDetails/MovieDetails.styled';
import MovieDetailList from '../../components/MovieDetailsList/MovieDetailList';
import AdditionalInformationList from 'components/AdditionalInformationList/AdditionalInformationList';

const MovieDetails = () => {
  const { movieDetails, backLinkHref, loading, success } = useGetMovieDetails();

  return (
    <Box as="div" p="20px" maxWidth="1200px" m="0 auto">
      {loading && <Loader />}

      <SC.BackBtn to={backLinkHref}>Back</SC.BackBtn>

      {success && <MovieDetailList movieDetails={movieDetails} />}

      <AdditionalInformationList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
