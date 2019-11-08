import React from 'react';
import './Search.scss';

const Search = (props) => {
  const {
    getSearchResults,
    setFilter,
  } = props;

  const onInputSearch = (e) => {
    if (e.target.value.trim() !== '') {
      setFilter('all');
      getSearchResults(e.target.value);
    }
  };

  return (
    <div>
      <input
        onChange={onInputSearch}
        className="giphy__input"
      />
    </div>
  );
};

export default Search;
