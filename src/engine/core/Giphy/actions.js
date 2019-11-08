import types from './types';

export const getSearchResults = (value) => ({
  type: types.watchGetSearchResults,
  value,
});

export const setSearchResults = (results) => ({
  type: types.addSearchResults,
  payload: results,
});

export const setFilter = (filter) => ({
  type: types.setFilter,
  payload: filter,
});
