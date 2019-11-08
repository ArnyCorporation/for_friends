import React from 'react';
import './Giphy.scss';
import Filters from './Filters';
import Results from './Results';
import Search from './Search';

const Giphy = () => (
  <div className="giphy">
    <h1>Giphy</h1>
    <Filters />
    <Search />
    <Results />
  </div>
);

export default Giphy;
