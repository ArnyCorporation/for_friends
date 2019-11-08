import React from 'react';
import './Result.scss';

const Result = ({ result }) => {
  console.log(result);
  return (
    <>
      <img
        className="giphy__img"
        src={result.images.downsized_large.url}
        alt="img"
      />
    </>
  );
};

export default Result;
