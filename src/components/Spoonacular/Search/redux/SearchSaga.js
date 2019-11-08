import { debounce, put } from 'redux-saga/effects';
import axios from 'axios';
import types from './types';
import { setSearchResults } from './actions';

function* setSearch(e) {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=4g5LURPswdvTEMPHYLunSif6lJTeBLo2&q=${e.value}&limit=20`;
    const data = yield axios.get(url);
    return yield put(setSearchResults(data.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* watchSearch() {
  yield debounce(1000, types.watchGetSearchResults, setSearch);
}

export default watchSearch;
