import React from 'react';
import Result from './Result';

const Results = ({ searchResults }) => {
  if (searchResults.length > 0) {
    return searchResults.map((result) => <Result key={result.id} result={result} />);
  } return <p>write to search something</p>;
};

export default Results;
