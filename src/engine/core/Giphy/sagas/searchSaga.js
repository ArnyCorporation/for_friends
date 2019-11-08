import { debounce, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { getFilters } from '../selectors';
import { setSearchResults } from '../actions';
import api from '../../../../config/api';
import types from '../types';


function* setSearch(e) {
  try {
    const filter = yield select(getFilters);
    let url;
    switch (filter) {
      case 'all':
        url = `${api.giphy}&q=${e.value}&limit=20`;
        break;
      case 'random':
        url = api.giphyRandom;
        break;
      default:
        return url;
    }
    const data = yield axios.get(url);
    return filter === 'all'
      ? yield put(setSearchResults(data.data.data))
      : yield put(setSearchResults([data.data.data]));
  } catch (error) {
    console.log(error);
  }
}

function* watchSearch() {
  yield debounce(1000, types.watchGetSearchResults, setSearch);
}

export default watchSearch;
