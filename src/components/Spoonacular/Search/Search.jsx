import React from 'react';
import './Search.scss';

const Search = (props) => {
  const {
    getSearchResults,
  } = props;

  const onInputSearch = (e) => {
    if (e.target.value.trim() !== '') {
      getSearchResults(e.target.value);
    }
  };

  return (
    <div>
      <input
        onChange={onInputSearch}
      />
    </div>
  );
};

export default Search;
