import { FcSearch } from 'react-icons/fc';
import * as SC from './Searchbox.styled';

import { useState } from 'react';

const Searchbox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;

    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <SC.SearchWrapper>
      <SC.SearchForm onSubmit={handleSubmit}>
        <SC.SearchFormInput
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
          value={query}
          onChange={handleChange}
        />
        <SC.SearchFormBtn type="submit">
          <FcSearch style={{ width: 30, height: 30 }} />
        </SC.SearchFormBtn>
      </SC.SearchForm>
    </SC.SearchWrapper>
  );
};

export default Searchbox;
