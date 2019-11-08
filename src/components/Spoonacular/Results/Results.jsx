import React from 'react';
import Result from './Result';

const Results = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <>
      {searchResults
    && searchResults.map((result) => (
      <Result
        key={result.id}
        result={result}
      />
    ))}
    </>
  );
};

export default Results;
