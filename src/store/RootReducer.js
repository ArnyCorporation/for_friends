import { combineReducers } from 'redux-immer';
import produce from 'immer';
import searchReducerGiphy from '../engine/core/Giphy/searchReducerGiphy';
import searchReducerSpoonacular from '../engine/core/Spoonacular/searchReducerSpoonacular';


export default combineReducers(produce, {
  searchReducerSpoonacular,
  searchReducerGiphy,
});
