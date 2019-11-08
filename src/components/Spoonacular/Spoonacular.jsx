import React from 'react';
import './Spoonacular.scss';
import Filters from './Filters';
import Results from './Results';

const Spoonacular = () => (
  <div>
    <h1>Spoonacular</h1>
    <Filters />
    <Results />
  </div>
);

export default Spoonacular;
