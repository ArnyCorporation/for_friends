import types from './types';

const initialState = {
  searchResults: [],
  filter: 'all',
};

const searchReducerGiphy = (state = initialState, action) => {
  switch (action.type) {
    case types.addSearchResults:
      state.searchResults = action.payload;
      return state;
    case types.setFilter:
      state.filter = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchReducerGiphy;
