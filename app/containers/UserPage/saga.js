import { takeLatest, put } from 'redux-saga/effects';

import getUserRequest from 'services/getUserRequest';
import { GET_USER } from './constants';
import { getUserSuccess, getUserFailure } from './actions';

export function* getUser(action) {
  const { token } = action;
  const response = yield getUserRequest(token);
  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(getUserFailure());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}