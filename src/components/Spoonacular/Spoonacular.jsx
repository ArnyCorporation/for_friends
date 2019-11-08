import React from 'react';
import './Spoonacular.scss';
import Filters from './Filters';
import Results from './Results';

const Spoonacular = () => (
  <div className="spoonacular">
    <h1>Spoonacular recipes</h1>
    <Filters />
    <Results />
  </div>
);

export default Spoonacular;
