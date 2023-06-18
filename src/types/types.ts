export interface Movie {
  adult?: boolean;
  id: number;
  title: string;
  overview?: string;
  poster_path: string;
  vote_average: number;
}

export interface MovieDetails extends Movie {
  overview: string;
  genres: { id: number; name: string }[];
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface UseGetMovieDetailsReturn {
  movieDetails: MovieDetails;
  backLinkHref: string;
  loading: boolean;
  success: boolean;
}

export interface Actor {
  id?: number;
  name: string;
  profile_path?: string;
  cast_id: number;
  character: string;
}

export interface ActorsData {
  id: number;
  cast: Actor[];
}

export interface Review {
  author: string;
  content?: string;
  created_at?: Date;
  id: string;
  url?: string;
}

export interface ReviewsData {
  id: number;
  results: Review[];
}

export interface RatingProps {
  rating: number;
}

export interface MoviesListProps {
  movies: Movie[];
}
