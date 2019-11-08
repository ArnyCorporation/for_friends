import { call, all } from 'redux-saga/effects';

import searchSaga from '../engine/core/Giphy/sagas/searchSaga';
import searchSagaSpoonacular from
  '../engine/core/Spoonacular/sagas/searchSagaSpoonacular';

function* RootSaga() {
  yield all([
    call(searchSagaSpoonacular),
    call(searchSaga),
  ]);
}

export default RootSaga;
