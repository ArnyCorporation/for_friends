import { debounce, put } from 'redux-saga/effects';
import axios from 'axios';
import { setSearchResultsSpoon } from '../actions';
import api from '../../../../config/api';
import types from '../types';


function* setSearchSpoon() {
  try {
    const url = api.spoonacularRandom;
    const data = yield axios.get(url);
    console.log(data);
    return yield put(setSearchResultsSpoon(data.data.recipes));
  } catch (error) {
    console.log(error);
  }
}

function* watchSearchSpoon() {
  yield debounce(500, types.watchGetSearchResultsSpoon, setSearchSpoon);
}

export default watchSearchSpoon;
