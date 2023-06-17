import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../utils/api/api';

import { toast } from 'react-hot-toast';

export const useGetSearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    const findMovies = async () => {
      setLoading(true);

      try {
        const films = await getSearchMovies(query);

        if (!films.length) {
          return setIsEmpty(true);
        }

        setMovies(films);
        setSuccess(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    findMovies();
  }, [query, isEmpty]);

  const handleFormSubmit = (value) => {
    setSearchQuery(value);

    const query = value.trim();

    if (query === '') {
      return toast('Type something!', {
        icon: '😕',
      });
    }

    setSearchParams({ query });

    setIsEmpty(false);

    setMovies([]);
  };

  return { handleFormSubmit, isEmpty, searchQuery, success, loading, movies };
};
