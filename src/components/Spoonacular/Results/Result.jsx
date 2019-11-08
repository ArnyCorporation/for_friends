import React from 'react';
import './Result.scss';

const Result = ({ result, i }) => (
  <div className="recipe">
    <h1
      className="recipe__title"
    >
      {result.title}
    </h1>
    <img
      className="recipe__img"
      src={result.image}
      alt="img"
    />
    <p
      className="recipe__likes"
    >
      Лайки:
      {' '}
      {result.aggregateLikes}
    </p>
    <h2>
      <a
        className="recipe__link"
        href={result.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Рецептик
      </a>
    </h2>

  </div>
);

export default Result;
