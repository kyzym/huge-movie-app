import { Loader } from '../../components/Loader/Loader';
import { useGetMovieDetails } from '../../hooks/useGetMovieDetails';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as SC from './MovieDetails.styled';
import MovieDetailList from '../../components/MovieDetailsList/MovieDetailList';
import AdditionalInformationList from '../../components/AdditionalInformationList/AdditionalInformationList';

const MovieDetails = () => {
  const { movieDetails, backLinkHref, loading, success } = useGetMovieDetails();

  return (
    <SC.MovieDetailsWrapper>
      {loading && <Loader />}

      <SC.BackBtn to={backLinkHref}>Back</SC.BackBtn>

      {success && <MovieDetailList movieDetails={movieDetails} />}

      <AdditionalInformationList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.MovieDetailsWrapper>
  );
};

export default MovieDetails;
