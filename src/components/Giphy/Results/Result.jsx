import React from 'react';

const Result = ({ result }) => {
  console.log(result);
  return (
    <>
      <img
        src={result.images.downsized_large.url}
        alt="img"
      />
    </>
  );
};

export default Result;
