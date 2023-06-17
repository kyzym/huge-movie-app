import { MovieDetails } from '../../types';

export const mockMovieDetails: MovieDetails = {
  adult: false,

  genres: [
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
  ],

  id: 11,

  overview:
    'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',

  poster_path: '/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',

  title: 'Error, this is mock Star Wars',

  vote_average: 8.203,
};
