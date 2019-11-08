import types from './types';

const initialState = {
  searchResultsSpoon: [],
};

const searchReducerSpoonacular = (state = initialState, action) => {
  switch (action.type) {
    case types.addSearchResultsSpoon:
      state.searchResultsSpoon = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchReducerSpoonacular;
