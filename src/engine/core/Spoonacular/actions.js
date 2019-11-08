import types from './types';

export const getSearchResultsSpoon = () => ({
  type: types.watchGetSearchResultsSpoon,
});

export const setSearchResultsSpoon = (results) => ({
  type: types.addSearchResultsSpoon,
  payload: results,
});
