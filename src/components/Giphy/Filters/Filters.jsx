import React from 'react';
import './Filters.scss';
import Button from './Button';

const Filters = ({ setFilter, getSearchResults }) => (
  <div>
    <Button
      setFilter={setFilter}
      getSearchResults={getSearchResults}
      random="random"
    />
  </div>
);

export default Filters;
